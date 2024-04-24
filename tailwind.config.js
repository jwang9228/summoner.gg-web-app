/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {}
    },
    screens: {
      'mobile': '300px',
      'laptop': '800px',
      'desktop': '1200px'
    }
  },
  plugins: [],
}