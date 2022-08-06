/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./apps/backoffice/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
