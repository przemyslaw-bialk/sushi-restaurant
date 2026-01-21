/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sushiMain: "#FFF",
        sushiAccent: "#E8281D",
      },
      fontFamily: {
        sushi: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
