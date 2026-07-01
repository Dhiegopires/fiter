const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'blog', 'posts');
const SITE_URL = 'https://fiter.com.br';

const staticPages = [
  { path: '/',                   priority: 1.0, changefreq: 'weekly',  lastmod: '2026-06-05' },
  { path: '/solucoes/rh/',       priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/solucoes/educacao/', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/produtos/',          priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/produtos/pulse/',    priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/produtos/pesquisa-de-clima/', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/produtos/nr01/',     priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/produtos/ouvidoria/', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/sobre/',             priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-05' },
  { path: '/blog/',              priority: 0.6, changefreq: 'weekly',  lastmod: '2026-06-05' },
];

const orphanPosts = [
  { slug: 'guia-do-gro-e-pgr', date: '2026-06-01' },
];

function getBlogPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

  return files.map(file => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data } = matter(content);
    const slug = data.slug || file.replace('.md', '');
    const date = data.date ? new Date(data.date) : new Date();
    return { slug, date: date.toISOString().split('T')[0] };
  });
}

function buildSitemap() {
  const blogPosts = getBlogPosts();
  const allPosts = [...blogPosts, ...orphanPosts];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  });

  allPosts.forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/blog/${post.slug}/</loc>\n`;
    xml += `    <lastmod>${post.date}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

const sitemap = buildSitemap();
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf-8');
console.log('  ✓ Gerado: sitemap.xml');
