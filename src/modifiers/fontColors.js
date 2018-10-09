import { uiColors } from '../utils';

const fontColorModifiers = {
  text: ({ theme }) => `
    color: ${uiColors('text', theme)};
  `,
  textLight: ({ theme }) => `
    color: ${uiColors('textLight', theme)};
  `,
};

export default fontColorModifiers;
