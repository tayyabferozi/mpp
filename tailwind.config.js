/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#243D80",
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        rock: ["Rock Salt", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(../public/assets/imgs/bg-hero.png)",
        detroit: "url(../public/assets/imgs/detriot.png)",
      },
    },
  },
  plugins: [],
};
