/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oasis: {
          black: "#0A0A0A",
          gold: "#D4AF37",
          white: "#FFFFFF",
          gray: "#F5F5F5",
          darkGray: "#333333",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};