/**
 * Tailwind design system for Peak Performance Kitchens.
 *
 * The brand accent green is intentionally NOT hard-coded here. It is exposed as
 * the CSS variable `--pk-green` (see src/index.css :root) and referenced through
 * `rgb(var(--pk-green) / <alpha-value>)`. To recolor the entire site to the exact
 * green sampled from the official logo, change that ONE variable in index.css.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neutral foundation — black / charcoal / gray / white
        ink: {
          DEFAULT: '#0B0B0C', // near-black page ink
          900: '#0B0B0C',
          800: '#141416',
          700: '#1C1D20',
          600: '#26272B',
        },
        charcoal: '#1C1D20',
        smoke: '#26272B',
        steel: '#4B4D52',
        ash: '#8A8D93',
        mist: '#C7C9CE',
        cloud: '#EDEEF0',
        paper: '#F6F7F5', // warm off-white surface
        // Performance accent — driven by the swappable --pk-green token
        green: {
          DEFAULT: 'rgb(var(--pk-green) / <alpha-value>)',
          soft: 'rgb(var(--pk-green-soft) / <alpha-value>)',
          ink: 'rgb(var(--pk-green-ink) / <alpha-value>)', // accessible green for text on light bg
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        peak: '0.18em',
      },
      borderRadius: {
        card: '18px',
        pill: '999px',
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        card: '0 20px 50px -24px rgba(0,0,0,0.35)',
        lift: '0 30px 70px -30px rgba(0,0,0,0.55)',
        'green-glow': '0 18px 40px -18px rgb(var(--pk-green) / 0.55)',
      },
      transitionTimingFunction: {
        peak: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};
