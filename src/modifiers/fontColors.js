import colors from 'config/colors';
import { uiColors } from '../utils';

const fontColorModifiers = {
  textMain: ({ theme }) => `
    color: ${uiColors('text.main', theme)};
  `,
  textLight: ({ theme }) => `
    color: ${uiColors('text.light', theme)};
  `,
  textBold: ({ theme }) => `
    color: ${uiColors('text.light', theme)};
  `,
  blue: () => `
    color: ${colors.blue};
  `,
  red: () => `
    color: ${colors.red};
  `,
  green: () => `
    color: ${colors.green};
  `,
  disabled: ({ theme }) => `
    color: ${uiColors('text.disabled', theme)};
  `,
};

export default fontColorModifiers;
