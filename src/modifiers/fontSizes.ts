import { DefaultTheme } from 'styled-components';

export const fontSizeExtraSmall = ({ font: { sizes: fontSize } }: DefaultTheme) => `
  font-size: ${fontSize.extraSmall};
`;

export const fontSizeSmall = ({ font: { sizes: fontSize } }: DefaultTheme) => `
  font-size: ${fontSize.small};
`;

export const fontSizeMedium = ({ font: { sizes: fontSize } }: DefaultTheme) => `
  font-size: ${fontSize.medium};
`;

export const fontSizeLarge = ({ font: { sizes: fontSize } }: DefaultTheme) => `
  font-size: ${fontSize.large};
`;
