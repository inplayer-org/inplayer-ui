import { uiColors } from '../utils';

const borderColorModifiers = {
  blue: ({ theme }) => `
    border: 1px solid ${uiColors('accentBlue', theme)};
  `,
  red: ({ theme }) => `
    border: 1px solid ${uiColors('danger', theme)};
  `,
  disabled: ({ theme }) => `
    border: 1px solid ${uiColors('fontcolorSec', theme)};
  `,
};

export default borderColorModifiers;
