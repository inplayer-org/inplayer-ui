import { paddingSizes } from 'utils';

const paddingSizeModifiers = {
  extraSmall: ({ theme }) => `
    font-size: ${paddingSizes('smaill', theme)};
  `,
  small: ({ theme }) => `
    font-size: ${paddingSizes('medium', theme)};
  `,
};

export default paddingSizeModifiers;
