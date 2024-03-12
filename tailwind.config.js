const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      neutral: colors.neutral,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      sky: colors.sky,
      blue: colors.blue,
      cyan: colors.cyan,
      violet: colors.violet,
      slate: colors.slate,
      stone: colors.stone,
      zinc: colors.zinc
    },
    
    extend: {},
  },
  plugins: [],
}

