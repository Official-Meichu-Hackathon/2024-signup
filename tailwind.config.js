/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
			xs: "360px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1400px",
			"3xl": "1800px",
		},
    extend: {
      colors: {
        ...colors,
        "plum": "#644646",
        "yellow": "#D8E022",
        "dark-gray": "#43473E",
        "gray": "#A1A8AD",
      },
      fontFamily: {
        "Mantou": ["Mantou Sans", "serif"],
        "Poppins": ["Poppins", "serif"],
        "Inter": ["Inter", "sans-serif"]
      },
      scale: {
        '370': '3.7',
        '350': '3.5'
      },
      flex: {
        '1.47': '1.47 1.47 0%',
        '7.12': '7.12 7.12 0%',
        '2.67': '2.67 2.67 0%',
        '4.86': '4.86 4.86 0%',
        '1': '1 1 0%' 
      },
    },
  },
  plugins: [],
}

