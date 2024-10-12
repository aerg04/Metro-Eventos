/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#F4D06F',
        'orangehs': '#ff8811', 
        'creamhs': '#FFF8F0', 
        'aquahs': '#9DD9D2', 
        'aqua-darker': '#76a09c', 
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

