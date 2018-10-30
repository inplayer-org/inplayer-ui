import colors from 'config/colors';
import { uiColors } from '../utils';

export const statusColorPrimary = () => `
   color: ${uiColors('primary.main')};
`;

export const statusColorWarning = () => `
   color: ${colors.yellow};
`;

export const statusColorInfo = () => `
   color: ${colors.skyBlue};
`;

export const statusColorSuccess = () => `
   color: ${colors.green};
`;

export const statusColorDanger = () => `
   color: ${colors.red};
`;
