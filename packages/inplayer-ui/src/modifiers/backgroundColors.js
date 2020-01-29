import colors from 'packages/inplayer-ui/src/config/colors';

export const backgroundPrimary = ({ theme }) => `
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
