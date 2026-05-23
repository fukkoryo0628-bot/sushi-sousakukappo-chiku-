# 鮨創作割烹ちく — 公式ウェブサイト

福岡県糸島市の鮨創作割烹ちく 公式サイトのソースコードです。

- **公開 URL（カスタムドメイン）**: https://sushi-sousakukappo-chiku.com
- **GitHub Pages URL**: https://fukkoryo0628.github.io/sushi-sousakukappo-chiku/
- **ホスティング**: GitHub Pages
- **デプロイ**: main ブランチへ push すると GitHub Actions が自動公開

---

## ファイル構成

```
/
├── index.html          # メインページ
├── style.css           # スタイルシート
├── main.js             # JavaScript（スクロール・ナビ・CMS連携）
├── logo.png            # ロゴ画像
├── hero-bg.jpg         # ヒーロー背景画像
├── IMG_*.jpg           # 料理・内観写真
├── robots.txt          # クローラー設定
├── CNAME               # カスタムドメイン設定（GitHub Pages用）
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions 自動デプロイ設定
```

---

## サイトを更新する方法

### 1. テキスト・内容の変更

`index.html` をテキストエディタで開いて編集します。

```bash
# 変更後、コミット & プッシュするだけで自動公開される
git add index.html
git commit -m "内容の変更内容を書く"
git push origin main
```

push して約 1〜2 分で本番サイトに反映されます。

### 2. スタイル（デザイン）の変更

`style.css` を編集して同様に push してください。

### 3. JavaScript の変更

`main.js` を編集して push してください。

### 4. 画像の差し替え

1. 新しい画像ファイルをこのフォルダにコピーする
2. `index.html` または `style.css` のファイル名を新しい名前に書き換える
3. push する

---

## 初回セットアップ（GitHub リポジトリの設定）

> **注意**: 初回のみ必要な作業です。

### GitHub リポジトリの作成

1. GitHub で `fukkoryo0628` アカウントにログイン
2. `sushi-sousakukappo-chiku` という名前で **新しいリポジトリを作成**（Public 推奨）
3. ローカルのリモートを新しいリポジトリに変更:

```bash
git remote set-url origin git@github.com:fukkoryo0628/sushi-sousakukappo-chiku.git
git push -u origin main
```

### GitHub Pages を有効化

1. GitHub リポジトリの **Settings** → **Pages** を開く
2. **Source** を `GitHub Actions` に変更して保存
3. push すると自動デプロイが始まります

### カスタムドメインの DNS 設定

ドメインレジストラ（お名前.com 等）で以下の DNS レコードを設定してください:

| タイプ | ホスト名 | 値 |
|--------|----------|----|
| A      | @        | 185.199.108.153 |
| A      | @        | 185.199.109.153 |
| A      | @        | 185.199.110.153 |
| A      | @        | 185.199.111.153 |
| CNAME  | www      | fukkoryo0628.github.io |

設定後、GitHub リポジトリの **Settings** → **Pages** → **Custom domain** に `sushi-sousakukappo-chiku.com` を入力して保存してください。

DNS の反映には最大 24〜48 時間かかる場合があります。

---

## 更新作業フロー（通常運用）

```
ファイルを編集
  ↓
git add <ファイル名>
  ↓
git commit -m "変更内容"
  ↓
git push origin main
  ↓
GitHub Actions が自動デプロイ（約1〜2分）
  ↓
https://sushi-sousakukappo-chiku.com に反映
```

デプロイの状況は GitHub リポジトリの **Actions** タブで確認できます。
