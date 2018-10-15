import { rem } from 'polished';

//used as background for code snippets
const coderBlue = "#272B38";

//dark blue colors
const performance = "#2a4d8e";
const performanceFilter = "#2a4d8e8c";
const performanceFilterLight = "#2a4d8e59";
const performanceDark = "#253a66";

//primary accent colors
const accentBlue = "#00aae6";
const accentBlueFade = "#00aae60f";
const accentDark = "#0a8cd2";
const accentPink = "#fcc8be";

//used for info boxes and warnings
const danger = "#f26f59";
const info = "#f9ece8";
const yellow = "#f4ca19";
const yellowLight = "#fffcee";
const success = "#5dc6a3";
const successLight = "#e4f9f2";

//secondary accent colors
const lemon = rgb(252, 243, 192);
const mint = rgb(200, 232, 222);

//basic grays
const background = "#f0f3f6";
const lines = "#d7dde5";
const icons = "#b9c1cb";

//extra light background color only for tables
const tableBg = "#f6f8fb";

// font colors
const fontcolorPrim = "#44494e";
const fontcolorSec = "#a0a3aa";
const fontcolorDis = "#c8ccd4";

const white = '#fff';

export default {
  colors: {
    white,
    performance,
    performanceFilter,
    performanceFilterLight,
    performanceDark,
    coderBlue,
    background,
    lines,
    icons,
    fontcolorPrim,
    fontcolorSec,
    fontcolorDis,
    accentBlue,
    accentBlueFade,
    accentDark,
    accentPink,
    lemon,
    mint,
    tableBg,
    danger,
    info,
    yellow,
    yellowLight,
    success,
    successLight,
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
};
