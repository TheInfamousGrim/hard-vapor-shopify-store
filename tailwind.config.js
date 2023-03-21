/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firasans: ["Fira Sans", "sans-serif"],
        newake: ["Newake", "sans-serif"]
      }
    },
  },
  plugins: [],
}
