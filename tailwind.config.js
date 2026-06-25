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
        /* Hero elements — blur clears as they rise */
        heroBlurUp: {
          from: { opacity: '0', transform: 'translateY(44px)', filter: 'blur(8px)' },
          to:   { opacity: '1', transform: 'translateY(0px)',  filter: 'blur(0px)' },
        },
        /* Divider line expands from center */
        drawLine: {
          from: { transform: 'scaleX(0)', opacity: '0' },
          to:   { transform: 'scaleX(1)', opacity: '1' },
        },
        /* Gold & pulses with a soft glow */
        goldGlow: {
          '0%, 100%': { textShadow: '0 0 0px rgba(201,169,110,0)',   color: '#c9a96e' },
          '50%':      { textShadow: '0 0 32px rgba(201,169,110,.85), 0 0 64px rgba(201,169,110,.3)', color: '#e0c080' },
        },
        /* Scroll hint floats gently */
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(10px)' },
        },
        /* Music play button pulse */
        cmsPulse: {
          '0%':   { boxShadow: '0 0 0 0 rgba(201,169,110,.6)' },
          '70%':  { boxShadow: '0 0 0 18px rgba(201,169,110,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201,169,110,0)'  },
        },
      },
      animation: {
        'hero-1': 'heroBlurUp .95s cubic-bezier(0.22,1,0.36,1) .20s both',
        'hero-2': 'heroBlurUp 1.1s  cubic-bezier(0.22,1,0.36,1) .52s both',
        'hero-3': 'drawLine   .90s  cubic-bezier(0.22,1,0.36,1) .95s both',
        'hero-4': 'heroBlurUp .95s  cubic-bezier(0.22,1,0.36,1) 1.15s both',
        'hero-5': 'heroBlurUp .95s  cubic-bezier(0.22,1,0.36,1) 1.38s both',
        'gold-glow':  'goldGlow 3.5s ease-in-out 2.8s infinite',
        'float':      'float 2.4s ease-in-out infinite',
        'cms-pulse':  'cmsPulse 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
};
