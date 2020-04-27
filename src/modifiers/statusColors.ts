import colors from 'theme/colors';
import { DefaultTheme } from 'styled-components';

export const statusColorPrimary = ({ palette: { primary } }: DefaultTheme) => `
   color: ${primary.main};
`;

export const statusColorWarning = () => `
   color: ${colors.yellow};
`;

export const statusColorInfo = ({ palette: { text } }: DefaultTheme) => `
   color: ${text.light};
`;

export const statusColorSuccess = () => `
   color: ${colors.green};
`;

export const statusColorDanger = () => `
   color: ${colors.red};
`;
