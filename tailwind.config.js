/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7650E0",
        secundary: "#F5F1FD",
        terciary: "#F6F8FC"
      }
      
    },
  },
  plugins: [],
}