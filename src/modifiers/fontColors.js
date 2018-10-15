import { uiColors } from '../utils';

const fontColorModifiers = {
  text: ({ theme }) => `
    color: ${uiColors('text', theme)};
  `,
  textLight: ({ theme }) => `
    color: ${uiColors('textLight', theme)};
  `,
  blue: ({ theme }) => `
    color: ${uiColors('accentBlue', theme)};
  `,
  red: ({ theme }) => `
    color: ${uiColors('danger', theme)};
  `,
  disabled: ({ theme }) => `
    color: ${uiColors('fontcolorSec', theme)};
  `,
};

export default fontColorModifiers;
