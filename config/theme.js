const { rem } = require('polished');

//used as background for code snippets
const coderBlue = rgb(39, 43, 56);

//dark blue colors
const performance = rgb(42, 77, 142);
const performanceFilter = rgba(42, 77, 142, 0.55);
const performanceFilterLight = rgba(42, 77, 142, 0.35);
const performanceDark = rgb(37, 58, 102);

//primary accent colors
const accentBlue = rgb(0, 170, 230);
const accentBlueFade = rgba(0, 170, 230, 0.06);
const accentDark = rgb(10, 140, 210);
const accentPink = rgb(252, 200, 190);

//used for info boxes and warnings
const warning = rgb(242, 111, 89);
const pig = rgb(249, 236, 232);
const honey = rgb(244, 202, 25);
const honeyLight = rgb(255, 252, 238);
const success = rgb(93, 198, 163);
const successLight = rgb(228, 249, 242);

//secondary accent colors
const lemon = rgb(252, 243, 192);
const mint = rgb(200, 232, 222);

//basic grays
const background = rgb(240, 243, 246);
const lines = rgb(215, 221, 229);
const icons = rgb(185, 193, 203);

//extra light background color only for tables
const tablebg = rgb(246, 248, 251);

// font colors
const fontcolorPrim = rgb(68, 73, 78);
const fontcolorSec = rgb(160, 163, 170);
const fontcolorDis = rgb(200, 204, 212);

const white = '#fff';

export default {
  colors: {
    white,
    performance,
    performanceFilter,
    performanceFilterLight,
    performanceDark,
    coderBlue,
    // ui colors
    ui: {
      background,
      lines,
      icons,
      link: accentBlue,
    },
    // font colors
    fontColor: {
      fontcolorPrim,
      fontcolorSec,
      fontcolorDis
    },
    // brand colors
    brand: {
      accentBlue,
      accentBlueFade,
      accentDark,
      accentPink
    },
    // secondary colors
    secondary: {
      lemon,
      mint
    },
    // table background
    table: {
      tablebg
    },
    // status colors
    status: {
      danger: warning,
      info: pig,
      yellow: honey,
      yellowLight: honeyLight,
      success: success,
      successLight,
    },
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
