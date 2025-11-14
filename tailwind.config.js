/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        impact:["impact","sans-serif"],
        rubik:["rubik","sans-serif"]
      }
    },
  },
  plugins: [],
}