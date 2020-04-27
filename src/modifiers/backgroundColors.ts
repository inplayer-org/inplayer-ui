import colors from 'theme/colors';
import { DefaultTheme } from 'styled-components';

export const backgroundPrimary = ({ palette: { primary } }: DefaultTheme) => `
  background: ${primary.main};
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
