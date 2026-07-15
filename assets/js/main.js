// Inline SVG logos so CSS currentColor controls the i-dot per theme
function inlineLogoSVGs() {
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
}
inlineLogoSVGs();

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
            inlineLogoSVGs();
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
        document.getElementById('nav-close') && document.getElementById('nav-close').addEventListener('click', closeMobile);

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

    // ── Hero background organic particle field ──────────────
    (function () {
        function hexToRgb(hex) {
            hex = (hex || '').trim().replace('#', '');
            if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
            const num = parseInt(hex, 16);
            return `${(num >> 16) & 255},${(num >> 8) & 255},${num & 255}`;
        }
        function initParticleCanvas(canvas) {
            const ctx = canvas.getContext('2d');
            let W, H, nodes, raf, frame = 0;
            const C = hexToRgb(getComputedStyle(canvas).getPropertyValue('--accent-brand') || '#3b82f6');
            const N = 88;
            const DIST = 120;

            function resize() {
                const r = canvas.getBoundingClientRect();
                W = canvas.width  = r.width;
                H = canvas.height = r.height;
            }

            function init() {
                resize();
                nodes = Array.from({ length: N }, (_, i) => ({
                    x:  Math.random() * W,
                    y:  Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.22,
                    vy: (Math.random() - 0.5) * 0.22,
                    r:  i < 6 ? 3.2 : i < 20 ? 2.0 : 1.3,
                    a:  i < 6 ? 0.88 : i < 20 ? 0.50 : 0.22,
                    ph: Math.random() * Math.PI * 2,
                }));
                if (raf) cancelAnimationFrame(raf);
                loop();
            }

            function loop() {
                frame++;
                ctx.clearRect(0, 0, W, H);

                for (const n of nodes) {
                    n.x += n.vx + Math.sin(frame * 0.0035 + n.ph) * 0.12;
                    n.y += n.vy + Math.cos(frame * 0.0028 + n.ph * 1.4) * 0.09;
                    if (n.x < 0) n.x = W;  if (n.x > W) n.x = 0;
                    if (n.y < 0) n.y = H;  if (n.y > H) n.y = 0;
                }

                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const a = nodes[i], b = nodes[j];
                        const dx = a.x - b.x, dy = a.y - b.y;
                        const d2 = dx * dx + dy * dy;
                        if (d2 < DIST * DIST) {
                            ctx.globalAlpha = (1 - Math.sqrt(d2) / DIST) * 0.16;
                            ctx.strokeStyle = `rgb(${C})`;
                            ctx.lineWidth = 0.65;
                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.stroke();
                        }
                    }
                }
                ctx.globalAlpha = 1;

                for (const n of nodes) {
                    if (n.r >= 3) { ctx.shadowColor = `rgba(${C},0.65)`; ctx.shadowBlur = 14; }
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${C},${n.a})`;
                    ctx.fill();
                    if (n.r >= 3) ctx.shadowBlur = 0;
                }

                raf = requestAnimationFrame(loop);
            }

            window.addEventListener('resize', resize);
            requestAnimationFrame(init);
        }
        document.querySelectorAll('.solution-hero-canvas').forEach(initParticleCanvas);
    })();

    // ── Vertical Bar Chart ───────────────────────────────────
    (function () {
        function buildVChart(areaEl) {
            if (areaEl.querySelector('.vchart-col')) return;
            const data    = JSON.parse(areaEl.dataset.chart);
            const maxVal  = parseFloat(areaEl.dataset.max || 100);
            const xEl     = document.getElementById(areaEl.id + '-x');
            const grid = document.createElement('div');
            grid.className = 'vchart-grid';
            for (let i = 0; i < 6; i++) {
                const line = document.createElement('div');
                line.className = 'vchart-grid-line';
                grid.appendChild(line);
            }
            areaEl.appendChild(grid);
            data.forEach((d, i) => {
                const col = document.createElement('div');
                col.className = 'vchart-col';
                const bar = document.createElement('div');
                bar.className = 'vchart-bar';
                bar.style.setProperty('--bar-delay', (i * 0.08) + 's');
                bar.style.background = 'var(--accent-brand)';
                bar.dataset.value = d.value;
                bar.dataset.targetPct = (d.value / maxVal * 100).toFixed(1);
                col.appendChild(bar);
                areaEl.appendChild(col);
                if (xEl) {
                    const lbl = document.createElement('div');
                    lbl.className = 'vchart-x-label';
                    lbl.textContent = d.label;
                    xEl.appendChild(lbl);
                    col.addEventListener('mouseenter', () => lbl.style.color = 'var(--text-primary)');
                    col.addEventListener('mouseleave', () => lbl.style.color = '');
                }
            });
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (!e.isIntersecting) return;
                    obs.unobserve(e.target);
                    e.target.querySelectorAll('.vchart-bar').forEach(bar => {
                        bar.style.height = bar.dataset.targetPct + '%';
                    });
                    setTimeout(() => e.target.classList.add('loaded'), 800);
                });
            }, { threshold: 0.2 });
            obs.observe(areaEl);
        }
        document.querySelectorAll('.vchart-bars-area[data-chart]').forEach(buildVChart);
    })();

    // ── Donut Chart ──────────────────────────────────────────
    (function () {
        const R = 90, STROKE = 20, CX = 110, CY = 110;
        const circumference = 2 * Math.PI * R;
        function buildDonutChart(wrapEl) {
            if (wrapEl.querySelector('svg')) return;
            const data = JSON.parse(wrapEl.dataset.chart);
            const legendId = wrapEl.id.replace('donut-', 'donut-legend-');
            const legendEl = document.getElementById(legendId);
            if (!legendEl) return;
            const svgNS = 'http://www.w3.org/2000/svg';
            const svg = document.createElementNS(svgNS, 'svg');
            svg.setAttribute('viewBox', '0 0 220 220');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            const bg = document.createElementNS(svgNS, 'circle');
            bg.setAttribute('cx', CX); bg.setAttribute('cy', CY); bg.setAttribute('r', R);
            bg.setAttribute('fill', 'none');
            bg.setAttribute('stroke', 'rgba(255,255,255,0.04)');
            bg.setAttribute('stroke-width', STROKE);
            svg.appendChild(bg);
            const segments = [];
            let offset = -90;
            data.forEach((d, i) => {
                const frac = d.pct / 100;
                const dash = frac * circumference;
                const gap  = circumference - dash;
                const circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', CX); circle.setAttribute('cy', CY); circle.setAttribute('r', R);
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', d.color);
                circle.setAttribute('stroke-width', STROKE);
                circle.setAttribute('stroke-dasharray', `0 ${circumference}`);
                circle.setAttribute('stroke-dashoffset', -offset / 360 * circumference);
                circle.setAttribute('stroke-linecap', 'butt');
                circle.style.transition = `stroke-dasharray 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s, stroke-width 0.2s ease, opacity 0.2s ease`;
                circle.style.transformOrigin = `${CX}px ${CY}px`;
                svg.appendChild(circle);
                segments.push({ circle, dash, gap, d });
                offset += frac * 360;
            });
            wrapEl.appendChild(svg);
            const center = document.createElement('div');
            center.className = 'donut-center';
            center.innerHTML = `<div class="donut-center-value" id="${wrapEl.id}-cv">${data[0].pct}%</div><div class="donut-center-label" id="${wrapEl.id}-cl">${data[0].label}</div>`;
            wrapEl.appendChild(center);
            const cv = document.getElementById(`${wrapEl.id}-cv`);
            const cl = document.getElementById(`${wrapEl.id}-cl`);
            data.forEach((d, i) => {
                const item = document.createElement('div');
                item.className = 'legend-item';
                item.innerHTML = `<span class="legend-dot" style="background:${d.color}"></span><span class="legend-label">${d.label}</span><span class="legend-pct" style="color:${d.color}">${d.pct}%</span>`;
                legendEl.appendChild(item);
                item.addEventListener('mouseenter', () => highlight(i));
                item.addEventListener('mouseleave', reset);
            });
            segments.forEach(({ circle }, i) => {
                circle.style.cursor = 'pointer';
                circle.addEventListener('mouseenter', () => highlight(i));
                circle.addEventListener('mouseleave', reset);
            });
            function highlight(idx) {
                const d = data[idx];
                cv.textContent = d.pct + '%'; cl.textContent = d.label; cv.style.color = d.color;
                segments.forEach(({ circle }, j) => {
                    circle.setAttribute('stroke-width', j === idx ? STROKE + 6 : STROKE - 3);
                    circle.style.opacity = j === idx ? '1' : '0.35';
                });
                legendEl.querySelectorAll('.legend-item').forEach((item, j) => item.style.opacity = j === idx ? '1' : '0.35');
            }
            function reset() {
                cv.textContent = data[0].pct + '%'; cl.textContent = data[0].label; cv.style.color = '';
                segments.forEach(({ circle }) => { circle.setAttribute('stroke-width', STROKE); circle.style.opacity = '1'; });
                legendEl.querySelectorAll('.legend-item').forEach(item => item.style.opacity = '1');
            }
            const donutObs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (!e.isIntersecting) return;
                    donutObs.unobserve(e.target);
                    segments.forEach(({ circle, dash, gap }) => circle.setAttribute('stroke-dasharray', `${dash} ${gap}`));
                });
            }, { threshold: 0.3 });
            donutObs.observe(wrapEl);
        }
        document.querySelectorAll('.donut-chart-wrap[data-chart]').forEach(buildDonutChart);
    })();

    // Touch device detection (prevents sticky :hover on mobile)
    if (!matchMedia('(hover: hover)').matches) {
        document.documentElement.classList.add('touch');
    }
});
