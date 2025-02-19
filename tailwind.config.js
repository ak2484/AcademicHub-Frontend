/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "palatinate-blue": "#2c2cff",
      "risd-blue": "#5757ffff",
      "medium-slate-blue": "#6f6ff2ff",
      "tropical-indigo": "#8282ffff",
      "powder-blue": "#adadffff",
      red: "#ff1010ff",
      "white-smoke": "#F5F5F5",
      "smoky-black": "#0a0000ff",
      gray: "#7f7979",
      "lavender-blue": "#C0C0FF",
      "pale-lavender": "#d5d5ff",
      "lavender-web": "#EAEAFF",
      "jordy-blue": "#9696FF",
      "dark-imperial-blue": "#121266",
      "cadmium-blue": "#1A1A99",
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