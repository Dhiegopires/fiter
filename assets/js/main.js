// Inline SVG logos so CSS currentColor controls the i-dot per theme
(function inlineLogoSVGs() {
    const imgs = document.querySelectorAll(
        '.nav-logo img[src$=".svg"], .nav-panel-logo img[src$=".svg"], .footer-brand img[src$=".svg"]'
    );
    if (!imgs.length) return;
    const url = imgs[0].src;
    fetch(url).then(r => r.text()).then(svgText => {
        const parser = new DOMParser();
        imgs.forEach(img => {
            const doc = parser.parseFromString(svgText, 'image/svg+xml');
            const svg = doc.documentElement;
            svg.style.height = img.style.height || '28px';
            svg.style.width = 'auto';
            svg.removeAttribute('width');
            svg.removeAttribute('height');
            svg.setAttribute('aria-hidden', 'true');
            svg.setAttribute('focusable', 'false');
            img.parentNode.replaceChild(svg, img);
        });
    }).catch(() => {});
})();

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Footer Logic
    function updateFooter() {
        const footer = document.querySelector('.ds-footer');
        const main = document.querySelector('.main-content');
        if (footer && main) {
            main.style.marginBottom = `${footer.offsetHeight}px`;
        }
    }
    window.addEventListener('resize', updateFooter);
    window.addEventListener('load', updateFooter);
    updateFooter();

    // Watch for footer injected asynchronously via fetch
    const footerObserver = new MutationObserver(() => {
        if (document.querySelector('.ds-footer')) {
            updateFooter();
            footerObserver.disconnect();
        }
    });
    footerObserver.observe(document.body, { childList: true, subtree: true });

    // Button Character Animation Splitter
    document.querySelectorAll('.btn-animate-chars').forEach(btn => {
        const textNodes = Array.from(btn.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        if (textNodes.length === 0) return;
        const text = textNodes.map(n => n.textContent).join('').trim();
        btn.innerHTML = '';
        const wrapper = document.createElement('span');
        wrapper.className = 'btn-text';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            span.dataset.char = char;
            span.style.transitionDelay = `${i * 0.015}s`;
            wrapper.appendChild(span);
        });
        btn.appendChild(wrapper);
    });

    // Theme Switcher
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            document.documentElement.setAttribute('data-theme', e.target.dataset.theme);
        });
    });

    // ── Navbar ───────────────────────────────────────────────
    (function () {
        const nav       = document.getElementById('site-nav');
        const hamburger = document.getElementById('nav-hamburger');
        const drawer    = document.getElementById('nav-drawer');
        const backdrop  = document.getElementById('nav-backdrop');
        if (!nav) return;

        const scrollObs = () => nav.classList.toggle('scrolled', window.scrollY > 10);
        window.addEventListener('scroll', scrollObs, { passive: true });
        scrollObs();

        document.querySelectorAll('[data-nav-item]').forEach(item => {
            let timer;
            item.addEventListener('mouseenter', () => {
                document.querySelectorAll('[data-nav-item].is-open').forEach(i => i.classList.remove('is-open'));
                clearTimeout(timer);
                item.classList.add('is-open');
            });
            item.addEventListener('mouseleave', () => { timer = setTimeout(() => item.classList.remove('is-open'), 200); });
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                document.querySelectorAll('[data-nav-item].is-open').forEach(i => i.classList.remove('is-open'));
                closeMobile();
            }
        });

        let scrollPos = 0;
        const CHATBOT_SEL = '.nld-chatbot, [class*="nld-"], [id*="leadster"], [id*="neurolead"]';

        function openMobile() {
            scrollPos = window.scrollY;

            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100%';

            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${scrollPos}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.touchAction = 'none';

            drawer && drawer.style.setProperty('z-index', '2147483647', 'important');

            document.querySelectorAll(CHATBOT_SEL).forEach(el => {
                el.style.setProperty('z-index', '1', 'important');
            });

            document.documentElement.classList.add('menu-open');
            document.body.classList.add('menu-open');
            nav.classList.add('menu-open');

            drawer && drawer.setAttribute('aria-hidden', 'false');
            hamburger && hamburger.setAttribute('aria-expanded', 'true');
        }
        function closeMobile() {
            document.documentElement.classList.remove('menu-open');
            document.body.classList.remove('menu-open');
            nav.classList.remove('menu-open');

            drawer && drawer.setAttribute('aria-hidden', 'true');
            hamburger && hamburger.setAttribute('aria-expanded', 'false');

            requestAnimationFrame(() => {
                document.documentElement.style.overflow = '';
                document.documentElement.style.height = '';

                document.body.style.overflow = '';
                document.body.style.height = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.touchAction = '';

                drawer && drawer.style.removeProperty('z-index');

                document.querySelectorAll(CHATBOT_SEL).forEach(el => {
                    el.style.removeProperty('z-index');
                });

                window.scrollTo(0, scrollPos);
            });
        }
        hamburger && hamburger.addEventListener('click', () => nav.classList.contains('menu-open') ? closeMobile() : openMobile());
        backdrop  && backdrop.addEventListener('click', closeMobile);

        document.querySelectorAll('[data-drawer-item]').forEach(item => {
            item.querySelector('.drawer-trigger').addEventListener('click', () => {
                const open = item.classList.contains('is-open');
                document.querySelectorAll('[data-drawer-item].is-open').forEach(i => i.classList.remove('is-open'));
                if (!open) item.classList.add('is-open');
            });
        });
    })();

    // ── FAQ Accordion ────────────────────────────────────────
    document.querySelectorAll('.faq-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item   = trigger.closest('.faq-item');
            const isOpen = item.classList.contains('is-open');
            trigger.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
            if (!isOpen) item.classList.add('is-open');
        });
    });

    // ── IntersectionObservers ────────────────────────────────
    const ioOnce = (selector, cls, threshold) => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(cls); obs.unobserve(e.target); } });
        }, { threshold });
        document.querySelectorAll(selector).forEach(el => obs.observe(el));
    };

    ioOnce('.testi-card', 'in-view', 0.15);
    ioOnce('.fade-up',    'in-view', 0.1);
    ioOnce('[data-steps]', 'in-view', 0.2);

    // ── Text Reveal (bar wipe) ───────────────────────────────────
    (function () {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-reveal]').forEach(el => {
            const delay = el.dataset.revealDelay || '0s';
            const html  = el.innerHTML;
            const wrap  = document.createElement('span');
            wrap.className = 'reveal-wrap';
            wrap.style.setProperty('--reveal-delay', delay);
            wrap.innerHTML = `<span class="reveal-bar" aria-hidden="true"></span><span class="reveal-content">${html}</span>`;
            el.innerHTML = '';
            el.appendChild(wrap);
            obs.observe(wrap);
        });

        document.querySelectorAll('.ds-section-title, [data-fade]').forEach(el => {
            el.classList.add('fade-up');
            obs.observe(el);
        });
    })();

    // ── Metric Counter Animation ─────────────────────────────
    (function () {
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        function animateCounter(el, target, suffix, duration) {
            const valueEl = el.querySelector('.metric-value');
            if (!valueEl) return;
            const start = performance.now();
            function tick(now) {
                const p = Math.min((now - start) / duration, 1);
                const val = Math.round(easeOut(p) * target);
                valueEl.textContent = val + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                const el     = e.target;
                const target = parseInt(el.dataset.metric, 10);
                const suffix = el.dataset.suffix || '';
                const delay  = parseFloat(getComputedStyle(el).getPropertyValue('--reveal-delay')) || 0;
                setTimeout(() => animateCounter(el, target, suffix, 1200), delay * 1000);
                obs.unobserve(el);
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('.metric-card[data-metric]').forEach(el => obs.observe(el));
    })();

    // Touch device detection (prevents sticky :hover on mobile)
    if (!matchMedia('(hover: hover)').matches) {
        document.documentElement.classList.add('touch');
    }
});
