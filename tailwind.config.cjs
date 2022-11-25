/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#345511",
        "primary-focus": "#457016",
        "primary-content": "#94BFBE",
        "secondary": "#5C0029",
        "secondary-focus": "#750034",
        "secondary-content": "#94BFBE",
        "base": "#274060",
        "base-focus": "#304f78",
        "base-content": "#94BFBE",
      }
    },
  },
  plugins: [],
}
