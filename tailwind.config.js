module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.html",
    "*.css",
    "./src/**/*.js",
    "./src/**/*.css",
    "*.html",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#009DAE",
        secondary: "#71DFE7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
