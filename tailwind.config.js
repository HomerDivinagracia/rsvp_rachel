/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: '#c9a96e', dark: '#b8924f' },
        dark:  '#2b3a4a',
        muted: '#6a8599',
        cream: '#f5ede0',
        dusty: {
          DEFAULT: '#7b9db4',
          dark:    '#4a7a96',
          light:   '#b8d0dc',
          pale:    '#ebf3f7',
        },
      },
      fontFamily: {
        sans:   ['Montserrat', 'sans-serif'],
        serif:  ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      keyframes: {
        heroFadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        cmsPulse: {
          '0%':   { boxShadow: '0 0 0 0 rgba(201,169,110,.6)' },
          '70%':  { boxShadow: '0 0 0 18px rgba(201,169,110,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201,169,110,0)' },
        },
      },
      animation: {
        'hero-1': 'heroFadeUp .8s ease .20s both',
        'hero-2': 'heroFadeUp .8s ease .55s both',
        'hero-3': 'heroFadeUp .8s ease .85s both',
        'hero-4': 'heroFadeUp .8s ease 1.10s both',
        'hero-5': 'heroFadeUp .8s ease 1.30s both',
        'cms-pulse': 'cmsPulse 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
};
