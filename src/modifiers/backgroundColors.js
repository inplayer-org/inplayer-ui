import { uiColors } from '../utils';

const backgroundColorModifiers = {
  blue: ({ theme }) => `
    background: ${uiColors('accentBlueFade', theme)};
  `,
  disabled: ({ theme }) => `
    background: ${uiColors('neutralGray', theme)};
  `,
};

export default backgroundColorModifiers;
