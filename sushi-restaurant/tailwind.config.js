/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sushiMain: "#FFF",
        sushiGreen: "#00C851",
        sushiGold: "#FFD700",
        sushiDark: "#242424",
      },
      fontFamily: {
        sushi: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
