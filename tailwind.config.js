/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./src/components/**/*.tsx"],
};
