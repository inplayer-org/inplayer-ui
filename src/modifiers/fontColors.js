import colors from 'config/colors';
import { uiColors } from '../utils';

export const textPrimary = () => `
  color: ${uiColors('text.main')};;
`;

export const textLight = () => `
  color: ${uiColors('text.light')};
`;

export const textDisabled = () => `
    color: ${uiColors('text.disabled')};
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
