import colors from 'config/colors';
import { uiColors } from '../utils';

const fontColorModifiers = {
  textMain: () => `
    color: ${uiColors('text.main')};
  `,
  textLight: () => `
    color: ${uiColors('text.light')};
  `,
  textBold: () => `
    color: ${uiColors('text.bold')};
  `,
  textBlue: () => `
    color: ${colors.blue};
  `,
  textRed: () => `
    color: ${colors.red};
  `,
  textGreen: () => `
    color: ${colors.green};
  `,
  textDisabled: () => `
    color: ${uiColors('text.disabled')};
  `,
};

export default fontColorModifiers;
