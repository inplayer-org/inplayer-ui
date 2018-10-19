import colors from 'config/colors';
import { uiColors } from '../utils';

const borderColorModifiers = {
  blue: () => `
    border: 1px solid ${colors.blue})};
  `,
  red: () => `
    border: 1px solid ${colors.red};
  `,
  disabled: ({ theme }) => `
    border: 1px solid ${uiColors('text.disabled', theme)};
  `,
};

export default borderColorModifiers;
