import { uiColors } from '../utils';

const borderColorModifiers = {
  blue: ({ theme }) => `
    border: 1px solid ${uiColors('accentBlue', theme)};
  `,
  red: ({ theme }) => `
    border: 1px solid ${uiColors('red', theme)};
  `,
  disabled: ({ theme }) => `
    border: 1px solid ${uiColors('fontGray', theme)};
  `,
};

export default borderColorModifiers;
