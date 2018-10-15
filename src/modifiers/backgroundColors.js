import { uiColors } from '../utils';

const backgroundColorModifiers = {
  blue: ({ theme }) => `
    color: ${uiColors('accentBlueFade', theme)};
  `,
  disabled: ({ theme }) => `
    color: ${uiColors('tableBg', theme)};
  `,
};

export default backgroundColorModifiers;
