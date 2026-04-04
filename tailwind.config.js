/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':        'var(--bg-primary)',
        'bg-surface':        'var(--bg-surface)',
        'bg-elevated':       'var(--bg-elevated)',
        'accent-blue': ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(37, 99, 235, ${opacityValue})`
            : 'var(--accent-blue)',
        'accent-blue-hover': 'var(--accent-blue-hover)',
        'accent-blue-light': 'var(--accent-blue-light)',
        'accent-blue-muted': 'var(--accent-blue-muted)',
        'text-primary':      'var(--text-primary)',
        'text-secondary':    'var(--text-secondary)',
        'text-tertiary':     'var(--text-tertiary)',
        'border-subtle':     'var(--border-subtle)',
        'border-medium':     'var(--border-medium)',
        'green-active':      'var(--green-active)',
        'red-alert':         'var(--red-alert)',
        brand:               'hsl(var(--brand))',
        'brand-foreground':  'hsl(var(--brand-foreground))',
      },
      fontFamily: {
        sans:  ['IBM Plex Sans', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
        mono:  ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        sm:          'var(--shadow-sm)',
        card:        'var(--shadow-card)',
        modal:       'var(--shadow-modal)',
        'glow-blue': 'var(--shadow-glow-blue)',
      },
    },
  },
  plugins: [],
}
