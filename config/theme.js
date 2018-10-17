const { rem } = require('polished');

// used as background for code snippets
const coderBlue = '#272B38';

// dark blue colors
const blue = '#2a4d8e'; // performance
const darkBlueFilter = '#2a4d8e8c'; // performanceFilter
const darkBlueFilterLight = '#2a4d8e59'; // performanceFilter
const darkBlue = '#253a66'; // performanceDark

// primary accent colors
const accentBlue = '#00aae6';
const accentBlueFade = '#00aae60f';
const accentDarkBlue = '#0a8cd2';
const accentPink = '#fcc8be';

// used for info boxes and warnings
const red = '#f26f59'; // danger
const pink = '#f9ece8'; // info
const yellow = '#f4ca19';
const yellowLight = '#fffcee';
const green = '#5dc6a3'; // success
const greenLight = '#e4f9f2'; // successLight

// secondary accent colors
const lemon = '#fcf3c0';
const mint = '#c8e8de';

// basic grays
const lightGray = '#f0f3f6'; // background
const gray = '#d7dde5'; // lines
const darkGray = '#b9c1cb'; // icons

// extra light background color only for tables
const neutralGray = '#f6f8fb'; // tableBg

// font colors
const fontDarkGray = '#44494e'; // fontcolorPrim
const fontGray = '#a0a3aa'; // fontcolorSec
const fontLightGray = '#c8ccd4'; // fontcolorDis

const white = '#fff';

module.exports = {
  colors: {
    white,
    blue,
    darkBlueFilter,
    darkBlueFilterLight,
    darkBlue,
    coderBlue,
    lightGray,
    gray,
    darkGray,
    fontDarkGray,
    fontGray,
    fontLightGray,
    accentBlue,
    accentBlueFade,
    accentDarkBlue,
    accentPink,
    lemon,
    mint,
    neutralGray,
    red,
    pink,
    yellow,
    yellowLight,
    green,
    greenLight,
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: '2px',
  },
  font: {
    primary: 'Open Sans',
    primaryFallback: 'Helvetica, Arial, sans-serif',
    weights: {
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
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
      h6: rem(20),
    },
  },
  padding: {
    sizes: {
      small: '10px 20px 11px',
      medium: '13px 22px 14px',
    },
  },
};
