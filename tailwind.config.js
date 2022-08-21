/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Fraunces: ["Fraunces"],
      },
      colors: {
        "dark-cyan": "#3c8067",
        cream: "#f2ebe3",
        "very-dark-blue": "#1c232b",
        "dark-grayish-blue": "#6c7289",
      },
    },
  },
  plugins: [],
};
