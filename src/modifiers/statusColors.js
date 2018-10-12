import { uiColors } from 'utils';

const statusColorModifiers = {
  statusColorDanger: ({ theme }) => `
    color: ${uiColors('danger', theme)};
  `,
  statusColorDefault: ({ theme }) => `
    color: ${uiColors('default', theme)};
  `,
  statusColorInfo: ({ theme }) => `
    color: ${uiColors('info', theme)};
  `,
  statusColorSuccess: ({ theme }) => `
    color: ${uiColors('success', theme)};
  `,
  statusColorWarning: ({ theme }) => `
    color: ${uiColors('yellow', theme)};
  `,
};

export default statusColorModifiers;
