/** @type {import('tailwindcss').Config} */
export default {
  content: [
  /* add these lines */
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  /* the lines between these comments */
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["MInter","sans-serif"],
        martian : ["martian mono","monospace"],
        
      },
      borderWidth : {
        3 : "3px"
      }
    },
  },
  plugins: [],
}
