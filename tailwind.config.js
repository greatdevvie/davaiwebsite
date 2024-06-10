/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'circe': ['Circe', 'sans-serif'],
        'halvar': ['HalvarBreitschrift', 'sans-serif'],
        'courier': ['Courier', 'sans-serif'],
        'couriernew': ['Courier New', 'sans-serif'],
        'couriernewcyr': ['Courier New Cyr', 'sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}