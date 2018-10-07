const { rem } = require("polished");

// common colors
const chrome000 = "#fff";
const chrome050 = "#f9f9fa";
const chrome100 = "#ecedf0";
const chrome200 = "#d0d3d9";
const chrome300 = "#c0c4cb";
const chrome400 = "#aeb3bd";
const chrome500 = "#9aa0ac";
const chrome600 = "#818998";
const chrome700 = "#636d7f";
const chrome800 = "#323f58";
const chrome900 = "#24324C";
const blue = "#0975E0";
const green = "#008900";
const lightBlue = "#318CE5";
const purple = "#4F40F0";
const red = "#DD3800";
const yellow = "#967100";

module.exports = {
  colors: {
    blue,
    green,
    lightBlue,
    purple,
    red,
    // ui colors
    ui: {
      background: chrome000,
      link: blue,
      linkHover: lightBlue,
      linkVisited: purple,
      text: chrome800,
      textLight: chrome700,
      // grayscale
      chrome000,
      chrome050,
      chrome100,
      chrome200,
      chrome300,
      chrome400,
      chrome500,
      chrome600,
      chrome700,
      chrome800,
      chrome900
    },
    // brand colors
    brand: {
      primary: chrome900,
      secondary: red,
      tertiary: yellow
    },
    // status colors
    status: {
      danger: red,
      default: chrome300,
      info: blue,
      success: green,
      warning: yellow
    }
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: "2px"
  },
  font: {
    primary: "Open Sans",
    primaryFallback: "Helvetica, Arial, sans-serif",
    weights: {
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      extraSmall: rem(12),
      small: rem(14),
      medium: rem(16),
      large: rem(18),
      h1: rem(40),
      h2: rem(36),
      h3: rem(32),
      h4: rem(28),
      h5: rem(24),
      h6: rem(20)
    }
  }
};
