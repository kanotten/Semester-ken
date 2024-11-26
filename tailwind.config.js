/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./auction.html",
    "./login.html",
    "./profile.html",
    "./register.html",
    "./js/**/*.js", // This will include JavaScript files in the js folder
    "./css/**/*.css", // This will include CSS files in the css folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
