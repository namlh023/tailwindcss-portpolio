/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7F0",
        black: "#030303",
        brown: "#7A746E",
        galacticBlue: "#755CDE",
        summerYellow: "#F6A560",
        lightRed: "#EB7565",
        darkPurple: "#552049",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {},
      backgroundImage: {
        logo: "url('./src/assets/logo.svg')",
        graphicDesign: "url('/src/assets/pattern-graphic-design.svg')",
        uiUx: "url('/src/assets/pattern-ui-ux.svg')",
        apps: "url('/src/assets/pattern-apps.svg')",
        illustrations: "url('/src/assets/pattern-illustrations.svg')",
        photo: "url('/src/assets/pattern-photography.svg')",
        motion: "url('/src/assets/pattern-motion-graphics.svg')",
        amy: "url('/src/assets//image-amy.webp')",
      },
      backgroundPosition: {
        "top-right-block": "right 1rem top 1rem",
      },
    },
  },
  plugins: [],
};
