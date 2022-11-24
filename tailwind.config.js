/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-black': '#080815',
        'c-blue': '#4628D7',
        'c-gold': '#F49507',
      },
    },
  },
  plugins: [],
}
