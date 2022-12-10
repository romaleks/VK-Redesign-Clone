/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#5377a3',
          800: '#2b4a76',
        },
      },
    },
  },
  plugins: [],
}
