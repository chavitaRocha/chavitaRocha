module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.html",
    "*.css",
    "./src/**/*.js",
    "./src/**/*.css",
    "*.html",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
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
