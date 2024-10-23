/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "based-gray": "#323437",
        "based-orange": "#FF9357",
        "based-gray-dark": "#202020",
        "based-dark": "#141414",
      },
    },
  },
  plugins: [],
};
