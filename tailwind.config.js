/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: '#3A2315',
        rust: '#662D14',
        terracotta: '#A85A32',
        copper: '#D4844D',
        sand: '#FDF8F0',
        clay: '#E5A974',
        offwhite: '#F3EBE1',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        'full': '9999px',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    },
  },
  plugins: [],
}
