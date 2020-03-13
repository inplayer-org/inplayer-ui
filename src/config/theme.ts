const { rem } = require('polished');
const colors = require('./colors');

export interface ITheme {
  palette: {
    primary: {
      main: string;
      light?: string;
      dark?: string;
    };
    secondary: {
      main: string;
      light?: string;
      dark?: string;
    };
    text: {
      main: string;
      light?: string;
      disabled?: string;
    };
  };
  dimensions: {
    baseGrid: number;
    borderRadius: string;
  };
  font: {
    primary: string;
    primaryFallback: string;
    weights: {
      thin?: number;
      light?: number;
      normal?: number;
      semiBold?: number;
      bold?: number;
    };
    sizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
}

export const Theme: ITheme = {
  palette: {
    primary: {
      main: colors.skyBlue,
      light: colors.lightSkyBlue,
      dark: colors.navy,
    },
    secondary: {
      main: colors.blue,
      light: colors.mediumBlue,
      dark: colors.darkBlue,
    },
    text: {
      main: colors.fontDarkGray,
      light: colors.fontGray,
      disabled: colors.fontLightGray,
    },
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: '2px',
  },
  font: {
    primary: 'Roboto',
    primaryFallback: 'Helvetica, Arial, sans-serif',
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 700,
    },
    sizes: {
      extraSmall: rem(12),
      small: rem(14),
      medium: rem(16),
      large: rem(18),
      extraLarge: rem(50),
      h1: rem(40),
      h2: rem(36),
      h3: rem(32),
      h4: rem(28),
      h5: rem(24),
      h6: rem(20),
    },
  },
};
