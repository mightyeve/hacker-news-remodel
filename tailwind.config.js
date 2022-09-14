module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "general-post": "url('/src/assets/generalPostBg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
