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
        const defaultPath = path.join(IMAGES_DIR, 'defult.jpeg');
        if (fs.existsSync(defaultPath)) {
            imageFilename = 'defult.jpeg';
            fs.copyFileSync(defaultPath, path.join(postDir, imageFilename));
        }
    }

    post.imageFilename = imageFilename;

    // Build CTA block (varia por categoria)
    let ctaBlock;
    if (data.category === 'Educação') {
        ctaBlock = `<div data-reveal style="margin-top:3.5rem;padding:2.5rem;background:var(--bg-surface);border:1px solid var(--border-default);border-radius:var(--radius-lg);position:relative;overflow:hidden;">
                        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 50%, var(--accent-glow) 0%, transparent 65%);pointer-events:none;" aria-hidden="true"></div>
                        <div style="position:relative;">
                            <p style="font-family:var(--font-mono);font-size:0.6rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-brand);margin-bottom:0.75rem;">Software — Fiter Pulse Educação</p>
                            <h3 style="font-family:var(--font-serif);font-size:clamp(1.25rem,2vw,1.65rem);font-weight:800;letter-spacing:-0.02em;line-height:1.15;color:var(--text-primary);margin-bottom:0.85rem;">O software que identifica evasão antes que aconteça.</h3>
                            <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1.75rem;">Fiter Pulse Educação é uma plataforma de software que envia pesquisas de pulso para alunos via WhatsApp — 8 cliques, sem app, sem login. O software mapeia engajamento acadêmico turma a turma e gera alertas automáticos de risco de evasão antes que o aluno desapareça.</p>
                            <a href="https://calendly.com/fiter_/fiter" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-animate-chars" style="text-decoration:none;display:inline-flex;" onclick="if(window.gtag)gtag('event','generate_lead',{event_category:'cta',event_label:'blog_post_cta_educacao'})">Ver demonstração do software</a>
                        </div>
                    </div>`;
    } else if (data.category === 'RH') {
        ctaBlock = `<div data-reveal style="margin-top:3.5rem;padding:2.5rem;background:var(--bg-surface);border:1px solid var(--border-default);border-radius:var(--radius-lg);position:relative;overflow:hidden;">
                        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 50%, var(--accent-glow) 0%, transparent 65%);pointer-events:none;" aria-hidden="true"></div>
                        <div style="position:relative;">
                            <p style="font-family:var(--font-mono);font-size:0.6rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-brand);margin-bottom:0.75rem;">Software — Fiter Pulse</p>
                            <h3 style="font-family:var(--font-serif);font-size:clamp(1.25rem,2vw,1.65rem);font-weight:800;letter-spacing:-0.02em;line-height:1.15;color:var(--text-primary);margin-bottom:0.85rem;">Seu RH ouve a equipe toda semana — em 8 cliques.</h3>
                            <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1.75rem;">O software Fiter envia pesquisas de pulso pelo WhatsApp sem login, sem app. Seu time responde em 2 minutos e você recebe um painel de People Analytics com alertas de burnout, previsão de turnover e PDI gerado por IA — tudo em tempo real.</p>
                            <a href="https://calendly.com/fiter_/fiter" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-animate-chars" style="text-decoration:none;display:inline-flex;" onclick="if(window.gtag)gtag('event','generate_lead',{event_category:'cta',event_label:'blog_post_cta_rh'})">Ver demonstração do software</a>
                            <p style="margin-top:1.25rem;font-size:0.85rem;color:var(--text-tertiary);">Ainda avaliando? <a href="/produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/" style="color:var(--accent-brand);text-decoration:underline;text-underline-offset:3px;">baixe o Guia Gratuito de Gestão de Riscos Psicossociais →</a></p>
                        </div>
                    </div>`;
    } else {
        ctaBlock = `<div data-reveal style="margin-top:3.5rem;padding:2.5rem;background:var(--bg-surface);border:1px solid var(--border-default);border-radius:var(--radius-lg);position:relative;overflow:hidden;">
                        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 50%, var(--accent-glow) 0%, transparent 65%);pointer-events:none;" aria-hidden="true"></div>
                        <div style="position:relative;">
                            <p style="font-family:var(--font-mono);font-size:0.6rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-brand);margin-bottom:0.75rem;">Plataforma Fiter</p>
                            <h3 style="font-family:var(--font-serif);font-size:clamp(1.25rem,2vw,1.65rem);font-weight:800;letter-spacing:-0.02em;line-height:1.15;color:var(--text-primary);margin-bottom:0.85rem;">Software de People Analytics que cabe no WhatsApp.</h3>
                            <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1.75rem;">A plataforma de software Fiter coleta feedback contínuo em 8 cliques via WhatsApp — sem login, sem app — e entrega um painel de People Analytics com alertas automáticos de burnout e previsão de turnover.</p>
                            <a href="https://calendly.com/fiter_/fiter" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-animate-chars" style="text-decoration:none;display:inline-flex;" onclick="if(window.gtag)gtag('event','generate_lead',{event_category:'cta',event_label:'blog_post_cta_generico'})">Agendar demonstração</a>
                        </div>
                    </div>`;
    }
    post.ctaBlock = ctaBlock;

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

    // Build related posts (same category first, then fill from others)
    const sameCat = posts.filter(p => p.data.slug !== data.slug && p.data.category === data.category).slice(0, 3);
    const otherCat = posts.filter(p => p.data.slug !== data.slug && p.data.category !== data.category).slice(0, 3 - sameCat.length);
    const relatedPosts = [...sameCat, ...otherCat].slice(0, 3);
    const relatedHtml = relatedPosts.map(r => `<a href="/blog/${r.data.slug}/" class="related-post-item">
                                <span class="related-post-tag">${r.data.category}</span>
                                <p class="related-post-title">${r.data.title}</p>
                            </a>`).join('\n                            ');

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
        .replace(/\{\{CTA_BLOCK\}\}/g, ctaBlock)
        .replace(/\{\{RELATED_POSTS\}\}/g, relatedHtml)
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
