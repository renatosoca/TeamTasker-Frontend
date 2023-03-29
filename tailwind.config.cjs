/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vs': '310px',
      'xs': '410px',
      '2xs': '510px',
      '3xs': '600px',
      'sm': '640px',
      '2sm': '710px',
      'md': '768px',
      '2md': '810px',
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
