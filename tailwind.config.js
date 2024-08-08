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
      'cloudy': {
        '50': '#f8f8f8',
        '100': '#f1f0ef',
        '200': '#e6e4e2',
        '300': '#d3d0ce',
        '400': '#b9b4b0',
        '500': '#a39d99',
        '600': '#87807b',
        '700': '#6f6a66',
        '800': '#5e5956',
        '900': '#514d4b',
        '950': '#292726',
        "1000": "#5e59564d"
    },
    
      }
    },
  },
  plugins: [],
}

