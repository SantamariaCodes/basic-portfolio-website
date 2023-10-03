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
        deepBlue: "rgba(0,163,0)",
        lessDeepBlue: "rgba(0,114,0)",
      },
      screens: {
        "420px": "420px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
