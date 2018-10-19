import { uiColors } from '../utils';

const backgroundColorModifiers = {
  blue: ({ theme }) => `
    background: ${uiColors('primary.light', theme)};
  `,
  disabled: ({ theme }) => `
    background: ${uiColors('primary.light', theme)};
  `,
};

export default backgroundColorModifiers;
