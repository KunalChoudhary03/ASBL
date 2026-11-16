/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F2EDE2',
          300: '#E7DFC2',
          400: '#D5C9BD',
          DEFAULT: '#F9F6F0',
        },
        obsidian: {
          950: '#0A0B0D',
          900: '#111216',
          850: '#17191F',
          800: '#1E2129',
          700: '#2A2E39',
          DEFAULT: '#111216',
        },
        champagne: {
          100: '#F5EFE6',
          200: '#EBDDC9',
          300: '#DFC6A7',
          400: '#CCA87B',
          500: '#B88F5B',
          600: '#9E7443',
          DEFAULT: '#CCA87B',
        },
        forest: {
          900: '#121F18',
          800: '#1B2E24',
          700: '#273F32',
          600: '#345242',
          DEFAULT: '#1B2E24',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Italiana"', 'serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      boxShadow: {
        'luxury': '0 25px 60px -15px rgba(0, 0, 0, 0.4)',
        'luxury-gold': '0 20px 50px -10px rgba(184, 143, 91, 0.15)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
