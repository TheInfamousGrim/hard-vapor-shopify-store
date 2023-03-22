/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ["Fira sans", "sans-serr"]
    },
    extend: {
      fontFamily: {
        'firasans': ["Fira Sans", "sans-serif"],
        'newake': ["Newake", "sans-serif"],
      },
      colors: {
        'amaranth-pink': '#E89CB7',
        'space-cadet': '#312B5D',
        crayola: '#FB6A82',
        aquamarine: "#00FFAB",
        sunglow: '#FECC4E',
        'rich-black': '#070013',
        'floral-white': '#FFFCF2',
        'dark-violet': '#8B25C9',
        'bright-pink': '#FC356D'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
