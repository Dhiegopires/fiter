const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'blog', 'posts');
const BLOG_DIR = path.join(ROOT, 'blog');
const LAYOUT_FILE = path.join(BLOG_DIR, '_layout-post.html');
const INDEX_FILE = path.join(BLOG_DIR, 'index.html');
const IMAGES_DIR = path.join(BLOG_DIR, 'images');

const MONTHS = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function formatDate(date) {
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${day} de ${MONTHS[date.getUTCMonth()]}, ${date.getUTCFullYear()}`;
}

// Read all markdown files
const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

if (files.length === 0) {
    console.log('Nenhum arquivo .md encontrado em blog/posts/');
    process.exit(0);
}

// Parse each file
const posts = files.map(file => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data, content: mdContent } = matter(content);

    data.slug = data.slug || file.replace('.md', '');
    data.date = data.date ? new Date(data.date) : new Date();
    data.readingTime = data.readingTime || Math.max(1, Math.ceil(mdContent.split(/\s+/).length / 200));
    data.author = data.author || 'Equipe Fiter';
    data.authorInitials = data.authorInitials || 'EF';
    data.description = data.description || '';
    data.category = data.category || 'Geral';

    // Convert markdown to HTML
    let htmlContent = marked.parse(mdContent);
    // Style the first paragraph as lead
    htmlContent = htmlContent.replace('<p>', '<p class="article-lead">');

    return { data, htmlContent, file };
});

// Sort by date (newest first)
posts.sort((a, b) => b.data.date - a.data.date);

// Read layout template
const layoutTemplate = fs.readFileSync(LAYOUT_FILE, 'utf-8');

// Generate individual post pages
posts.forEach(post => {
    const { data, htmlContent } = post;
    const postDir = path.join(BLOG_DIR, data.slug);

    if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
    }

    // Copy image from blog/images/ to post directory
    let imageFilename = null;
    if (data.image) {
        const srcPath = path.join(IMAGES_DIR, data.image);
        if (fs.existsSync(srcPath)) {
            imageFilename = data.image;
            fs.copyFileSync(srcPath, path.join(postDir, imageFilename));
        } else {
            console.warn(`  ╔ Imagem não encontrada: ${data.image} (esperada em blog/images/${data.image})`);
        }
    }

    // Fallback to default image if post has no image
    if (!imageFilename) {
        const defaultPath = path.join(IMAGES_DIR, 'default.svg');
        if (fs.existsSync(defaultPath)) {
            imageFilename = 'default.svg';
            fs.copyFileSync(defaultPath, path.join(postDir, imageFilename));
        }
    }

    post.imageFilename = imageFilename;

    // Build image section
    let imageSection;
    if (imageFilename) {
        imageSection = `
        <section style="padding-bottom: 3rem;">
            <div style="max-width: 960px; margin: 0 auto; padding: 0 2rem;">
                <img src="${imageFilename}" alt="${data.title}" style="width:100%;aspect-ratio:16/7;object-fit:cover;border-radius:var(--radius-lg);border:1px solid var(--border-subtle);display:block;">
            </div>
        </section>`;
    } else {
        imageSection = '';
    }

    let pageHtml = layoutTemplate
        .replace(/\{\{PAGE_TITLE\}\}/g, `${data.title} | Fiter Blog`)
        .replace(/\{\{META_DESCRIPTION\}\}/g, data.description)
        .replace(/\{\{SLUG\}\}/g, data.slug)
        .replace(/\{\{CATEGORY\}\}/g, data.category)
        .replace(/\{\{TITLE\}\}/g, data.title)
        .replace(/\{\{DATE\}\}/g, formatDate(data.date))
        .replace(/\{\{READING_TIME\}\}/g, data.readingTime)
        .replace(/\{\{AUTHOR\}\}/g, data.author)
        .replace(/\{\{AUTHOR_INITIALS\}\}/g, data.authorInitials)
        .replace(/\{\{IMAGE_SECTION\}\}/g, imageSection)
        .replace(/\{\{CONTENT\}\}/g, htmlContent);

    fs.writeFileSync(path.join(postDir, 'index.html'), pageHtml, 'utf-8');
    console.log(`  ✓ Gerado: blog/${data.slug}/index.html`);
});

// Generate category filter badges
const categories = [...new Set(posts.map(p => p.data.category))];
const filterBadges = `
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
                <button class="filter-btn active" data-category="all">Todos</button>
                ${categories.map(cat => `
                <button class="filter-btn" data-category="${cat}">${cat}</button>`).join('\n')}
            </div>`;

// Generate blog listing cards
const cardsHtml = posts.map((post, i) => {
    const cardImage = post.imageFilename
        ? `<img src="${post.data.slug}/${post.imageFilename}" alt="${post.data.title}" class="post-img">`
        : '';
    return `
            <a href="${post.data.slug}/" class="post-card" data-category="${post.data.category}">
                <div class="post-thumb">
                    <span class="post-tag">${post.data.category}</span>
                    ${cardImage}
                </div>
                <div class="post-body">
                    <h3 class="post-title">${post.data.title}</h3>
                    <p class="post-excerpt">${post.data.description}</p>
                    <div class="post-meta">
                        <span>${formatDate(post.data.date)}</span>
                        <span>${post.data.readingTime} min de leitura</span>
                    </div>
                </div>
            </a>`;
}).join('\n');

// Update blog/index.html
let indexContent = fs.readFileSync(INDEX_FILE, 'utf-8');

const gridRegex = /<!-- BLOG_GRID_START -->[\s\S]*?<!-- BLOG_GRID_END -->/;
if (gridRegex.test(indexContent)) {
    indexContent = indexContent.replace(gridRegex, `<!-- BLOG_GRID_START -->\n${cardsHtml}\n            <!-- BLOG_GRID_END -->`);
} else {
    console.error('  ✗ Marcadores <!-- BLOG_GRID_START --> / <!-- BLOG_GRID_END --> não encontrados em blog/index.html');
}

const categoryRegex = /<!-- CATEGORY_FILTER_START -->[\s\S]*?<!-- CATEGORY_FILTER_END -->/;
if (categoryRegex.test(indexContent)) {
    indexContent = indexContent.replace(categoryRegex, `<!-- CATEGORY_FILTER_START -->\n${filterBadges}\n            <!-- CATEGORY_FILTER_END -->`);
} else {
    console.error('  ✗ Marcadores <!-- CATEGORY_FILTER_START --> / <!-- CATEGORY_FILTER_END --> não encontrados em blog/index.html');
}

fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');
console.log('  ✓ Atualizado: blog/index.html');

console.log(`\n✅ Blog atualizado com ${posts.length} post(ns)!`);
