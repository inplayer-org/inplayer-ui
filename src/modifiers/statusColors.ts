import colors from '../theme/colors';
import { ModifierProps } from './types';

export const statusColorPrimary = ({ theme }: ModifierProps) => `
   color: ${theme.palette.primary.main};
`;

export const statusColorWarning = () => `
   color: ${colors.yellow};
`;

export const statusColorInfo = ({ theme }: ModifierProps) => `
   color: ${theme.palette.primary.light};
`;

export const statusColorSuccess = () => `
   color: ${colors.green};
`;

export const statusColorDanger = () => `
   color: ${colors.red};
`;
