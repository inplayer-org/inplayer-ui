import { rem } from 'polished';
import { DefaultTheme } from 'styled-components';
import colors from './colors';

export const Theme: DefaultTheme = {
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
    background: {
      main: colors.white,
      light: colors.gray,
      dark: colors.asphalt,
    },
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: '2px',
  },
  font: {
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 700,
    },
    sizes: {
      extraSmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      extraLarge: '50px',
      h1: '40px',
      h2: '36px',
      h3: '32px',
      h4: '28px',
      h5: '24px',
      h6: '20px',
    },
  },
};
