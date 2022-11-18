/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./apps/backoffice/src/**/*.{html,ts}",
    "./libs/ui/src/lib/**/*.{html,ts}",
    "./apps/karan/src/**/!(*.stories|*.spec).{ts,html}",
    "./apps/doq/src/**/*.{js,jsx,ts,tsx,html}"
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
