/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7F0",
        black: "#030303",
        brown: "#7A746E",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {},
      backgroundImage: {
        logo: "url('./src/assets/logo.svg')",
      },
    },
  },
  plugins: [],
};
