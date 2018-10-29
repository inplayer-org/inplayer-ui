import { fontSizes } from 'utils';

export const fontSizeExtraSmall = ({ theme }) => `
  font-size: ${fontSizes('extraSmall', theme)};
`;

export const fontSizeSmall = ({ theme }) => `
  font-size: ${fontSizes('small', theme)};
`;

export const fontSizeMedium = ({ theme }) => `
  font-size: ${fontSizes('medium', theme)};
`;

export const fontSizeLarge = ({ theme }) => `
  font-size: ${fontSizes('large', theme)};
`;
