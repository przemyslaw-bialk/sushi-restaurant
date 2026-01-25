/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sushiMain: "#FFF",
        sushiAccent: "#E8281D",
        sushiBrand: "#F7AA47",

        bgMenu: "#050303",
      },
      fontFamily: {
        sushi: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
