/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Primary":"#e22326",
        "PrimaryBg":"#f3abac"
      },
      container:{
        center:true,
      }
    },
  },
  plugins: [],
}

