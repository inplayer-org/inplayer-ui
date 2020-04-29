import colors from 'theme/colors';
import { ModifierProps } from './types';

export const textPrimary = ({ theme }: ModifierProps) => `
  color: ${theme.palette.text.main};
`;

export const textLight = ({ theme }: ModifierProps) => `
  color: ${theme.palette.text.light};
`;

export const textDisabled = ({ theme }: ModifierProps) => `
  color: ${theme.palette.text.disabled};
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
