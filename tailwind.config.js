/** @type {import('tailwindcss').Config} */

const chroma = require('chroma-js');

const colors = {
  primary: "#17273b",
  secondary: "#5C0029",
  base: "#274060",
  light: "#f1faee",
  dark: "#192909",
}

const colorModifier = {
  light: 1,
  dark: 1,
};

const toLight = (color) => chroma(color).brighten(colorModifier.light).hex();
const toDark = (color) => chroma(color).darken(colorModifier.light).hex();
const getContentColor = (color) =>
  chroma.contrast(color, colors.light) > 4.5 ? colors.light : colors.dark;

module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": colors.primary,
        "primary-focus": toLight(colors.primary),
        "primary-content": getContentColor(colors.primary),

        "secondary": colors.secondary,
        "secondary-focus": toLight(colors.secondary),
        "secondary-content": getContentColor(colors.secondary),

        "base": colors.base,
        "base-color": colors.base,
        "base-focus": toLight(colors.base),
        "base-content": getContentColor(colors.base),

        "light": colors.light,
        "light-focus": toDark(colors.light),
        "light-content": getContentColor(colors.light),

        "dark": colors.dark,
        "dark-focus": toLight(colors.dark),
        "dark-content": getContentColor(colors.dark),
      }
    },
  },
  plugins: [],
}
