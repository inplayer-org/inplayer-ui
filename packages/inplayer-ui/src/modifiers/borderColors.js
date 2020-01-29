import colors from 'packages/inplayer-ui/src/config/colors';

export const borderPrimary = ({ theme }) => `
  border: 1px solid ${theme.palette.primary.main};
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
