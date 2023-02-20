/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, Arial, sans-serif',
      },
      colors: {
        blue: {
          300: '#3c95fb',
          400: '#487ebb',
          500: '#5377a3',
          600: '#415e81',
          800: '#2b4a76',
        },
        gray: {
          100: '#f2f3f5',
          200: '#e8eaed',
          300: '#e2e5e9',
        },
        red: {
          300: '#fae8e8',
        },
      },
      maxWidth: {
        '7xl': '1600px',
      },
    },
  },
  plugins: [],
}
