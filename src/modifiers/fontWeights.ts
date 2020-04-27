import { DefaultTheme } from 'styled-components';

export const fontLight = ({ font }: DefaultTheme) => `
  font-weight: ${font.weights.light};
`;

export const fontNormal = ({ font }: DefaultTheme) => `
  font-weight: ${font.weights.normal};
`;

export const fontSemiBold = ({ font }: DefaultTheme) => `
  font-weight: ${font.weights.semiBold};
`;

export const fontBold = ({ font }: DefaultTheme) => `
  font-weight: ${font.weights.bold};;
`;
