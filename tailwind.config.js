module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 100px rgba(0, 0, 0, 0.1)",
        medium: "0 4px 14px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1)",
        hard: "0 7px 19px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23)",
      },
      colors: {
        deepBlue: "rgba(36, 79, 229, 1)",
        lessDeepBlue: "rgba(3,57,108)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
