import colors from 'theme/colors';
import { DefaultTheme } from 'styled-components';

export const textPrimary = ({ palette: { text } }: DefaultTheme) => `
  color: ${text.main};
`;

export const textLight = ({ palette: { text } }: DefaultTheme) => `
  color: ${text.light};
`;

export const textDisabled = ({ palette: { text } }: DefaultTheme) => `
  color: ${text.disabled};
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
