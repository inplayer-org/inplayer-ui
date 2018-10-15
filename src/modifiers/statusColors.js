import { uiColors } from 'utils';

const statusColorModifiers = {
  statusColorDanger: ({ theme }) => `
    color: ${uiColors('red', theme)};
  `,
  statusColorDefault: ({ theme }) => `
    color: ${uiColors('default', theme)};
  `,
  statusColorInfo: ({ theme }) => `
    color: ${uiColors('pink', theme)};
  `,
  statusColorSuccess: ({ theme }) => `
    color: ${uiColors('green', theme)};
  `,
  statusColorWarning: ({ theme }) => `
    color: ${uiColors('yellow', theme)};
  `,
};

export default statusColorModifiers;
