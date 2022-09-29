/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru-lvl1': '#17EAD9',
        'biru-lvl2': '#6078EA',
        'hijau-lvl1': '#42E695',
        'hijau-lvl2': '#3BB2B8',
        'emas-lvl1': '#FCE38A',
        'emas-lvl2': '#F38181',
        'pink-lvl1': '#F54EA2',
        'pink-lvl2': '#FF7676',
        'merah-lvl1': '#C53364',
        'merah-lvl2': '#622774',
        'ungu-lvl1': '#EA6060',
        'ungu-lvl2': '#7117EA'
      }
    },
  },
  plugins: [],
}
