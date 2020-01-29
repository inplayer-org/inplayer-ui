import { fontWeights } from 'utils';

export const fontWeightModifiers = {};

export const fontLight = ({ theme }) => `
  font-weight: ${fontWeights('light', theme)};
`;

export const fontNormal = ({ theme }) => `
  font-weight: ${fontWeights('normal', theme)};
`;

export const fontSemiBold = ({ theme }) => `
  font-weight: ${fontWeights('semiBold', theme)};
`;

export const fontBold = ({ theme }) => `
  font-weight: ${fontWeights('bold', theme)};
`;
