import colors from '../theme/colors';
import { ModifierProps } from './types';

export const backgroundPrimary = ({ theme }: ModifierProps) => `
  background: ${theme.palette.primary.main};
`;

export const backgroundInfo = () => `
  background: ${colors.blue};
`;

export const backgroundWarning = () => `
   background: ${colors.yellow};
`;

export const backgroundSuccess = () => `
  background: ${colors.green};
`;

export const backgroundDanger = () => `
  background: ${colors.red};
`;
