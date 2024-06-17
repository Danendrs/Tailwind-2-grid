/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    container:{
    center:true,
    padding: '16px' ,
  },
    extend: {
      screen: {
        '2xl' : '1300px',
      }
    },
  },
  plugins: [],
}

