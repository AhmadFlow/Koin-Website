/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        "tighter-2": "-2%",
        "tighter-3": "-3%",
      },
      lineHeight: {
        sm: "120%",
        base: "122.5%",
        md: "130.5%",
        lg: "158%",
      },
      colors: {
        "dark-purple": "#190422",
        "lavender-purple": "#BC8AFC",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
