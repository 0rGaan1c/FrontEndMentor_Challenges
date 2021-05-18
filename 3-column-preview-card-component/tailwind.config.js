module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        big: ["Big Shoulders Display", "cursive"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
      textColor: {
        white: "#ffffff",
        gray: "#f2f2f2",
        orange: "#e38826",
        cyan: "#006970",
        darkcyan: "#004241",
      },
      backgroundColor: {
        orange: "#e38826",
        cyan: "#006970",
        darkcyan: "#004241",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
