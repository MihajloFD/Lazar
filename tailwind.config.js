/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-vol1': '#F0F0F0',
        'gray-vol2': '#F6F6F',
      },
      fontSize: {
        xxm: '0.5rem',
        xsm: '0.6rem'
      },
      backgroundImage: {
        'cart-img': "url('/src/assets/cart.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
  ],
}

