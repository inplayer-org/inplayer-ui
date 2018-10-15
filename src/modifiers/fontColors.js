import { uiColors } from '../utils';

const fontColorModifiers = {
  text: ({ theme }) => `
    color: ${uiColors('fontDarkGray', theme)};
  `,
  textLight: ({ theme }) => `
    color: ${uiColors('fontLightGray', theme)};
  `,
  blue: ({ theme }) => `
    color: ${uiColors('accentBlue', theme)};
  `,
  red: ({ theme }) => `
    color: ${uiColors('red', theme)};
  `,
  disabled: ({ theme }) => `
    color: ${uiColors('fontGray', theme)};
  `,
};

export default fontColorModifiers;
