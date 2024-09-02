/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: "#ece3ce",
        darkBrowne: "#3f2305",
        laurelGreen: "#739072",
        fernGreen: "#4f6f52",
        kombuGreen: "#3a4d39",
      },
    },
  },
  plugins: [],
};
