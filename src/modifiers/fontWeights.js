import { fontWeights } from '../utils';

const fontWeightModifiers = {
  light: ({ theme }) => `
    font-weight: ${fontWeights('light', theme)};
  `,
  normal: ({ theme }) => `
    font-weight: ${fontWeights('normal', theme)};
  `,
  semiBold: ({ theme }) => `
    font-weight: ${fontWeights('semiBold', theme)};
  `,
  bold: ({ theme }) => `
    font-weight: ${fontWeights('bold', theme)};
  `,
};

export default fontWeightModifiers;
