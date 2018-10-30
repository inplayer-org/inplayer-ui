import colors from 'config/colors';
import { uiColors } from '../utils';

export const textMain = () => `
  color: ${uiColors('text.main')};
`;

export const textLight = () => `
  color: ${uiColors('text.light')};
`;

export const textDisabled = () => `
    color: ${uiColors('text.disabled')};
`;

export const textPrimary = () => `
  color: ${colors.blue};
`;

export const textDanger = () => `
  color: ${colors.red};
`;

export const textSuccess = () => `
  color: ${colors.green};
`;

export const textWarning = () => `
  color: ${colors.yellow};
`;
