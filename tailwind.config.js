/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/index.liquid'],
  theme: {
    extend: {
      colors: {
        'secam': {
          'light-blue': '#08648E', 
          'dark-blue': '#152934', 
          'white': '#dfdfdf'
        }
      }
    },
  },
  plugins: [],
}
