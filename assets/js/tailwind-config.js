tailwind.config = {
    corePlugins: { preflight: false },
    theme: {
        extend: {
            colors: {
                'bg-base': 'var(--bg-base)',
                'bg-surface': 'var(--bg-surface)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-tertiary': 'var(--text-tertiary)',
                'border-default': 'var(--border-default)',
                'border-subtle': 'var(--border-subtle)',
                'accent-brand': 'var(--accent-brand)',
                'accent-glow': 'var(--accent-glow)'
            },
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'sans-serif'],
                serif: ['"Instrument Serif"', 'serif'],
                mono: ['"IBM Plex Mono"', 'monospace']
            }
        }
    }
}
