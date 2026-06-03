"""
Instagram Business Account の最新投稿を index.html の「お知らせ」セクションに反映。

API コールを最小化するため 2 段階で処理する:
  1. 最新投稿 ID だけを取得（軽量）→ 前回 ID と一致すれば即終了
  2. 新規投稿があった場合のみ全フィールドを取得して HTML を更新
"""

import html
import json
import os
import re
import sys
import tempfile
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests

TOKEN = os.environ["INSTAGRAM_ACCESS_TOKEN"]  # Facebook Page Access Token（無期限）
IG_USER_ID = os.environ["INSTAGRAM_USER_ID"]  # Instagram Business Account の数値 ID
API_VERSION = "v21.0"
BASE_URL = f"https://graph.facebook.com/{API_VERSION}"
JST = timezone(timedelta(hours=9))
MAX_ITEMS = 3
IMAGE_DIR = Path("assets/instagram")
STATE_FILE = Path("scripts/last_post_id.json")

MARKER_START = "<!-- INSTAGRAM_NEWS_START -->"
MARKER_END = "<!-- INSTAGRAM_NEWS_END -->"


# ── URL安全性 ──────────────────────────────────────────────────────────────────

def _safe_url(url: str) -> str:
    """https:// のみ許可。それ以外は空文字を返す。"""
    try:
        if urlparse(url).scheme != "https":
            return ""
        return html.escape(url, quote=True)
    except Exception:
        return ""


# ── Instagram API ──────────────────────────────────────────────────────────────

def fetch_latest_post_id() -> str | None:
    """最新1件の ID だけを取得（APIコスト最小化）。"""
    r = requests.get(
        f"{BASE_URL}/{IG_USER_ID}/media",
        params={"fields": "id", "limit": 1, "access_token": TOKEN},
        timeout=15,
    )
    r.raise_for_status()
    data = r.json().get("data", [])
    return data[0]["id"] if data else None


def fetch_posts() -> list[dict]:
    """新規投稿確認後に呼ぶ。全フィールドを MAX_ITEMS 件取得。"""
    r = requests.get(
        f"{BASE_URL}/{IG_USER_ID}/media",
        params={
            "fields": "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
            "limit": MAX_ITEMS,
            "access_token": TOKEN,
        },
        timeout=15,
    )
    r.raise_for_status()
    return r.json().get("data", [])


# ── 状態管理 ───────────────────────────────────────────────────────────────────

def load_last_post_id() -> str | None:
    if not STATE_FILE.exists():
        return None
    with open(STATE_FILE) as f:
        return json.load(f).get("last_post_id") or None


def save_last_post_id(post_id: str) -> None:
    with open(STATE_FILE, "w") as f:
        json.dump(
            {"last_post_id": post_id, "updated_at": datetime.now(JST).isoformat()},
            f, ensure_ascii=False, indent=2,
        )


# ── 画像ダウンロード ────────────────────────────────────────────────────────────

def download_image(post_id: str, url: str) -> str | None:
    """CDN期限切れ対策: ローカルに保存してパスを返す。既存ファイルは再ダウンロードしない。"""
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    dest = IMAGE_DIR / f"{post_id}.jpg"
    if dest.exists():
        return str(dest)
    try:
        r = requests.get(url, timeout=30, stream=True)
        r.raise_for_status()
        if not r.headers.get("content-type", "").startswith("image/"):
            return None
        with open(dest, "wb") as f:
            for chunk in r.iter_content(8192):
                f.write(chunk)
        return str(dest)
    except Exception as e:
        print(f"[warn] image download failed ({post_id}): {e}", file=sys.stderr)
        return None


# ── HTML生成 ───────────────────────────────────────────────────────────────────

def format_item(post: dict) -> str:
    dt = datetime.fromisoformat(post["timestamp"].replace("Z", "+00:00")).astimezone(JST)
    date = dt.strftime("%Y.%m.%d")

    # caption: ハッシュタグ除去 + 50字制限 + HTMLエスケープ
    caption = post.get("caption", "")
    first_line = re.sub(r"#\S+", "", caption.split("\n")[0]).strip()
    if len(first_line) > 50:
        first_line = first_line[:50] + "…"
    text = html.escape(first_line) if first_line else "Instagramを更新しました"

    # permalink: https のみ許可
    safe_permalink = _safe_url(post.get("permalink", ""))

    # 画像はローカル保存のみ（CDN期限切れ対策）。
    # ニュースリストは既存の3列グリッド CSS に合わせてテキストのみ表示する。
    raw_img = (
        post.get("thumbnail_url")
        if post.get("media_type") == "VIDEO"
        else post.get("media_url")
    )
    if raw_img and _safe_url(raw_img):
        download_image(post["id"], raw_img)

    # <li> の直接の子要素は date・category・news-text の3つに固定（グリッド崩れ防止）
    return (
        f'            <li class="news-item">\n'
        f'              <time class="news-date">{date}</time>\n'
        f'              <span class="news-category">Instagram</span>\n'
        f'              <p class="news-text">'
        f'<a href="{safe_permalink}" target="_blank" rel="noopener noreferrer"'
        f' style="color:var(--gold);">{text}</a>'
        f'</p>\n'
        f'            </li>'
    )


def update_html(posts: list[dict]) -> None:
    """
    index.html のマーカー間を更新する。
    - マーカーが見つからない場合は RuntimeError を送出（サイレント破損防止）
    - アトミック書き込み（一時ファイル経由）でクラッシュ時の破損を防ぐ
    """
    path = Path("index.html")
    original = path.read_text(encoding="utf-8")

    if MARKER_START not in original or MARKER_END not in original:
        raise RuntimeError(
            f"index.html にマーカーが見つかりません。\n"
            f"  '{MARKER_START}' および '{MARKER_END}' が必要です。"
        )

    items = "\n".join(format_item(p) for p in posts)
    replacement = MARKER_START + "\n" + items + "\n            " + MARKER_END
    # lambda を使い、キャプション内の \1 等をバックリファレンスとして誤解釈させない
    updated = re.sub(
        re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
        lambda _: replacement,
        original,
        flags=re.DOTALL,
    )

    # アトミック書き込み: 同ディレクトリの一時ファイルへ書いてからリネーム
    tmp = path.with_suffix(".html.tmp")
    try:
        tmp.write_text(updated, encoding="utf-8")
        tmp.replace(path)
    except Exception:
        tmp.unlink(missing_ok=True)
        raise


def update_sitemap() -> None:
    today = datetime.now(JST).strftime("%Y-%m-%d")
    path = Path("sitemap.xml")
    xml = path.read_text(encoding="utf-8")
    updated = re.sub(r"<lastmod>.*?</lastmod>", f"<lastmod>{today}</lastmod>", xml)
    path.write_text(updated, encoding="utf-8")


# ── エントリーポイント ──────────────────────────────────────────────────────────

def main() -> None:
    # Step 1: 最新1件の ID だけ取得（軽量 API コール）
    latest_id = fetch_latest_post_id()
    if not latest_id:
        print("No posts found")
        return

    # Step 2: 前回保存した ID と比較 → 同じなら終了
    last_id = load_last_post_id()
    if latest_id == last_id:
        print(f"No new posts (last_post_id={last_id})")
        return

    # Step 3: 新規投稿あり → 全データ取得・HTML更新・状態保存
    print(f"New post detected: {latest_id} (prev={last_id})")
    posts = fetch_posts()
    if not posts:
        return

    # update_html が RuntimeError を出した場合、以降の処理は実行されない
    update_html(posts)
    update_sitemap()
    save_last_post_id(latest_id)
    print(f"Updated {len(posts)} posts")


if __name__ == "__main__":
    main()
