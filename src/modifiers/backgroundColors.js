import colors from 'config/colors';
import { uiColors } from '../utils';

export const backgroundPrimary = () => `
  background: ${uiColors('primary.main')};
`;

export const backgroundInfo = () => `
  background: ${colors.skyBlue};
`;

export const backgroundWarning = () => `
   background: ${colors.red};
`;

export const backgroundSuccess = () => `
  background: ${colors.green};
`;

export const backgroundDanger = () => `
  background: ${colors.red};
`;
