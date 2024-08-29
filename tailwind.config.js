/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "palatinate-blue": "#2c2cffff",
      "risd-blue": "#5757ffff",
      "medium-slate-blue": "#6f6ff2ff",
      "tropical-indigo": "#8282ffff",
      "powder-blue": "#adadffff",
      red: "#ff1010ff",
      "white-smoke": "#f5f5f5ff",
      "smoky-black": "#0a0000ff",
      gray: "#7f7979",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
