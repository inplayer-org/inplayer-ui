import { fontSizes } from '../utils';

const fontSizeModifiers = {
  extraSmall: ({ theme }) => `
    font-size: ${fontSizes('extraSmall', theme)};
  `,
  small: ({ theme }) => `
    font-size: ${fontSizes('small', theme)};
  `,
  medium: ({ theme }) => `
    font-size: ${fontSizes('medium', theme)};
  `,
  large: ({ theme }) => `
    font-size: ${fontSizes('large', theme)};
  `,
};

export default fontSizeModifiers;
