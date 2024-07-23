// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        dropIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 3.5s ease-out forwards",
        dropIn: "dropIn 0.5s ease-out forwards",
      },
      colors: {
        mainBlue: "rgb(28, 119, 195)",
        subBlue: "rgb(57, 169, 219)",
        btnBlue: "rgb(64, 188, 216)",
        mainOrange: "rgb(243, 146, 55)",
        mainRed: "rgb(214, 50, 48)",
        mainTxt: "rgb(45, 45, 42)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
