/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vs': '300px',
      'xs': '410px',
      '3xs': '600px',
      'sm': '640px',
      'md': '768px',
      'mp': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
