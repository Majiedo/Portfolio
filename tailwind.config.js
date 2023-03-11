/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(at 75% 22%, rgb(139, 92, 246) 0, transparent 100%), radial-gradient(at 12% 32%, rgb(51, 65, 85) 0, transparent 87%), radial-gradient(at 64% 49%, rgb(5, 150, 105) 0, transparent 98%);'
      }
    },
  },
  plugins: [],
}
