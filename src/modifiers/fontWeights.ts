import { fontWeights } from 'utils';
import { DefaultTheme } from 'styled-components';

export const fontWeightModifiers = {};

export const fontLight = ({ theme }: DefaultTheme) => `
  font-weight: ${fontWeights('light', theme)};
`;

export const fontNormal = ({ theme }: DefaultTheme) => `
  font-weight: ${fontWeights('normal', theme)};
`;

export const fontSemiBold = ({ theme }: DefaultTheme) => `
  font-weight: ${fontWeights('semiBold', theme)};
`;

export const fontBold = ({ theme }: DefaultTheme) => `
  font-weight: ${fontWeights('bold', theme)};
`;
