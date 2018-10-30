import colors from 'config/colors';

export const statusColorPrimary = ({ theme }) => `
   color: ${theme.palette.primary.main};
`;

export const statusColorWarning = () => `
   color: ${colors.yellow};
`;

export const statusColorInfo = () => `
   color: ${colors.blue};
`;

export const statusColorSuccess = () => `
   color: ${colors.green};
`;

export const statusColorDanger = () => `
   color: ${colors.red};
`;
