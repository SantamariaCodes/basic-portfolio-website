module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "system-ui"],
      },
      fontWeight: {
        'extrabold': '800',  // or '900' if your font supports it
      },
      boxShadow: {
        soft: "0 10px 100px rgba(0, 0, 0, 0.1)",
        medium: "0 4px 14px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1)",
        hard: "0 7px 19px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23)",
      },
      colors: {
        deepBlue: "rgba(0,163,0)",
        lessDeepBlue: "#A96121",
        orange: "#FCA311",
        customColor: '#606c38',
        navbarCustomColor:'#283618',
        buttonCustomColor: "#bc6c25",
        skill: '#dda15e'
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
