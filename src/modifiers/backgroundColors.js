import colors from 'config/colors';

export const backgroundPrimary = ({ theme }) => `
  background: ${theme.palette.primary.main};
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
