import { statusColors } from '../utils';

const statusColorModifiers = {
  statusColorDanger: ({ theme }) => `
    color: ${statusColors('danger', theme)};
  `,
  statusColorDefault: ({ theme }) => `
    color: ${statusColors('default', theme)};
  `,
  statusColorInfo: ({ theme }) => `
    color: ${statusColors('info', theme)};
  `,
  statusColorSuccess: ({ theme }) => `
    color: ${statusColors('success', theme)};
  `,
  statusColorWarning: ({ theme }) => `
    color: ${statusColors('warning', theme)};
  `,
};

export default statusColorModifiers;
