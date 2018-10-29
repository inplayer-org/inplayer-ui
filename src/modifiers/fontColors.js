import colors from 'config/colors';
import { uiColors } from '../utils';

export const textMain = () => `
  color: ${uiColors('text.main')};
`;

export const textLight = () => `
  color: ${uiColors('text.light')};
`;

export const textBold = () => `
  color: ${uiColors('text.bold')};
`;

export const textBlue = () => `
  color: ${colors.blue};
`;

export const textRed = () => `
  color: ${colors.red};
`;

export const textGreen = () => `
    color: ${colors.green};
`;

export const textDisabled = () => `
    color: ${uiColors('text.disabled')};
`;
