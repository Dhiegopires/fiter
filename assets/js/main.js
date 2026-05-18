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
    updateFooter(); // Executa logo de cara

    // Button Character Animation Splitter
    document.querySelectorAll('.btn-animate-chars').forEach(btn => {
        // Extrai o texto do botão
        const textNodes = Array.from(btn.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        if (textNodes.length === 0) return;
        
        const text = textNodes.map(n => n.textContent).join('').trim();
        btn.innerHTML = ''; // Limpa o botão
        
        const wrapper = document.createElement('span');
        wrapper.className = 'btn-text';
        
        // Separa cada letra em um <span> com delay
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            span.dataset.char = char; // Usado no ::after para a animação perfeita
            span.style.transitionDelay = `${i * 0.015}s`; // Atraso escalonado
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
});
