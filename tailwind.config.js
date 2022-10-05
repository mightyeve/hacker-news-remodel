module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "general-post": "url('/src/assets/generalPostBg.png')",
      },
      colors: {
        "hn-orange": "#ff6600",
        "light-orange": "#FF8A00",
        "light-gray": "#373737",
        "dark-gray": "#313131",
      },
      fontFamily: {
        "ropa-sans": ['"Ropa Sans"', "cursive"],
        "advent-pro": ['"Advent Pro"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
