const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["src/main/resources/templates/Index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      neutral: colors.neutral,
      white: colors.white,
      indigo: colors.indigo,
      sky: colors.sky,
      blue: colors.blue,
      violet: colors.violet,
      zinc: colors.zinc
    },
    extend: {
      spacing: {
        '84': '22.5rem',
        '98' : '24.5rem'
      },
      keyframes: {
        messageAnimation: {
          '0%, 100%': { transform:'translateX(-120%)' }, 
          '25%, 50%, 75%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        messageAnimation: 'messageAnimation 2.5s ease-in-out',
      }
    }
  },
  plugins: [],
}