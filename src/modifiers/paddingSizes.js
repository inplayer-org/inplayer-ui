import { paddingSizes } from 'utils';

const paddingSizeModifiers = {
  extraSmall: ({ theme }) => `
    padding: ${paddingSizes('smaill', theme)};
  `,
  small: ({ theme }) => `
    padding: ${paddingSizes('medium', theme)};
  `,
};

export default paddingSizeModifiers;
