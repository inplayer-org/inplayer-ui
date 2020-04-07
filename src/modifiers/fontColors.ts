import colors from 'theme/colors';

export const textPrimary = ({ theme }) => `
  color: ${theme.palette.text.main};
`;

export const textLight = ({ theme }) => `
  color: ${theme.palette.text.light};
`;

export const textDisabled = ({ theme }) => `
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
