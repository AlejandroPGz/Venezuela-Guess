/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth:{
        "input": "1px"
      },
      height:{
        "landing": '30rem'
      },
      margin:{
        'landing': '-1rem'
      },
      colors: {
        'scarpa-flow': {
          '50': '#f7f7f8',
          '100': '#eeedf1',
          '200': '#d8d8df',
          '300': '#b6b5c4',
          '400': '#8f8da3',
          '500': '#716f88',
          '600': '#5b5970',
          '700': '#504e61',
          '800': '#413f4d',
          '900': '#393743',
          '950': '#26252c',
      },
      }
    },
  },
  plugins: [],
}

