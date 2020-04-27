import colors from 'theme/colors';
import { DefaultTheme } from 'styled-components';

export const borderPrimary = ({ palette: { primary } }: DefaultTheme) => `
  border: 1px solid ${primary.main};
`;

export const borderInfo = () => `
  background: ${colors.skyBlue};
`;

export const borderWarning = () => `
   border: 1px solid ${colors.red};
`;

export const borderSuccess = () => `
  border: 1px solid ${colors.green};
`;

export const borderDanger = () => `
  border: 1px solid ${colors.red};
`;
