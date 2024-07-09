/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        red: "hsl(0, 100%, 74%) ",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 32%, 49%)",
        darkBlue: "hsl(249, 10%, 26%)",
        grayishBlue: "hsl(246, 25%, 77%)",
      },
      boxShadow: {
        button1: "0 8px 0 0 hsla(249, 10%, 26%, 0.4)",
        button2: "0 -2px 0 1px rgba(0, 0, 0, 0.15) inset",
      },
    },
  },
  plugins: [],
};
