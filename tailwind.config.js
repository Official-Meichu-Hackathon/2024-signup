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
        "Inter": ["Inter", "sans-serif"],
        "Taipei": ["Taipei Sans TC Beta", "sans-serif"],
      },
      scale: {
        '370': '3.7',
        '350': '3.5'
      },
    },
  },
  plugins: [],
}

