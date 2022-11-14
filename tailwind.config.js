/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      height: {
      'navBar': '30px',
      'page': 'calc(100% - 30px)'
      },

      colors: {

        white:{
          500: '#E1E1E6'
        },

        blue:{
          500:'#78D1E1'
        },

        purple:{
          900: '#13111B',
          800: '#191622',
          700: '#201B2D',
          600: '#252131',
          500: '#44475A70',
          400: '#41414D',
          300: '#626483',
          200: '#5A4B81',
          100: '#988bc7'
        }
      }

    },
    
  },

  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
