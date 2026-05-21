/* 鮨創作割烹ちく — メインJS */

// ヘッダースクロール制御
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// スクロールアニメーション
const revealTargets = [
  '.concept-text',
  '.concept-visual',
  '.menu-card',
  '.course-card',
  '.info-text',
  '.info-map',
  '.reserve-card',
  '.omakase-note',
  '.reserve-note',
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  const delay = (i % 3) * 0.1;
  el.style.transitionDelay = `${delay}s`;
  observer.observe(el);
});

// ナビゲーションアクティブ表示
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--gold-light)'
          : '';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

// 木目テクスチャ：マウスパララックス（ヒーローのみ）
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroBg.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
  }, { passive: true });
}

// =============================================
// STUDIO CMS — NEWS 連携
// =============================================
// STUDIOのCMS設定が完了したら下記2行を書き換えてください
// ・API_URL  : STUDIO CMS の APIエンドポイントURL
// ・API_KEY  : STUDIO CMS の APIキー
// ・LIST_URL : 「一覧を見る」ボタンのリンク先URL
// =============================================
const NEWS_API_URL = '';          // 例: 'https://api.studio.design/cms/...'
const NEWS_API_KEY = '';          // 例: 'studioXXXXXXXXXXXXXXXX'
const NEWS_LIST_URL = '';         // 例: 'https://yoursite.studio.site/news'
const NEWS_LIMIT   = 3;

// フィールド名マッピング（STUDIOのフィールド名に合わせて変更）
const NEWS_FIELDS = {
  title    : 'title',     // タイトルのフィールド名
  date     : 'date',      // 日付のフィールド名
  category : 'category',  // カテゴリのフィールド名（不要なら '' に）
};

function formatNewsDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

function renderNewsItems(items) {
  const list = document.getElementById('news-list');
  if (!list || !items.length) return;
  list.innerHTML = items.map(item => {
    const title    = item[NEWS_FIELDS.title]    || '';
    const date     = formatNewsDate(item[NEWS_FIELDS.date] || item.publishedAt || '');
    const category = NEWS_FIELDS.category ? (item[NEWS_FIELDS.category] || '') : '';
    return `
      <li class="news-item">
        <time class="news-date">${date}</time>
        ${category ? `<span class="news-category">${category}</span>` : ''}
        <p class="news-text">${title}</p>
      </li>`;
  }).join('');
}

async function loadNewsFromCMS() {
  if (!NEWS_API_URL || !NEWS_API_KEY) return; // 未設定なら仮データをそのまま表示

  const list = document.getElementById('news-list');
  if (list) list.innerHTML = '<li class="news-loading">Loading...</li>';

  try {
    const res = await fetch(`${NEWS_API_URL}?limit=${NEWS_LIMIT}`, {
      headers: { 'X-API-KEY': NEWS_API_KEY }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    // STUDIOのレスポンス形式に応じて調整（contents / items / data など）
    const items = json.contents ?? json.items ?? json.data ?? json;
    renderNewsItems(Array.isArray(items) ? items : []);
  } catch (e) {
    console.warn('NEWS CMS fetch failed:', e);
    // 失敗時は仮データを復元
    if (list) list.innerHTML = `
      <li class="news-item">
        <time class="news-date">—</time>
        <p class="news-text">お知らせを取得できませんでした</p>
      </li>`;
  }
}

// 「一覧を見る」リンク先を設定
const newsMoreBtn = document.getElementById('news-more');
if (newsMoreBtn && NEWS_LIST_URL) newsMoreBtn.href = NEWS_LIST_URL;

loadNewsFromCMS();

// スムーズスクロール（アンカーリンク）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerH = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
