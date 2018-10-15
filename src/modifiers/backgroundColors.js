import { uiColors } from '../utils';

const backgroundColorModifiers = {
  blue: ({ theme }) => `
    background: ${uiColors('accentBlueFade', theme)};
  `,
  disabled: ({ theme }) => `
    background: ${uiColors('tableBg', theme)};
  `,
};

export default backgroundColorModifiers;
