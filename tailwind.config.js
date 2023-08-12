/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-color": "#DD2427",
        "dark-red-color": "#A11F22",
        "orange-color": "#E3512E",
        "gray-color": "#D1D3D4",
        "yellow-color": "#F7D31A",
      },
      fontSize: {
        "page-title-xl": "32px",
        "page-title-sm": "30px",
        "page-content-xl": "20px",
        "page-content-lg": "18.5px",
        "page-content-md": "17.5px",
        "page-content-sm": "18px",
      },
      screens: {
        '2md': '850px',
        'xsm': '450px',
      },
    },
  },
  plugins: [],
}

