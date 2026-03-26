/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eclipse: '#1A0000',
        aura: '#8B2500',
        sunbeam: '#DA7134',
        bliss: '#E89154',
        ardent: '#F5E6D0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        display: ['Tan Nightingale', 'Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    },
  },
  plugins: [],
}
