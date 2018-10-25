import colors from 'config/colors';

const statusColorModifiers = {
  statusColorRed: () => `
    color: ${colors.red};
  `,
  statusColorBlue: () => `
    color: ${colors.blue};
  `,
  statusColorGreen: () => `
   color: ${colors.green};
  `,
};

export default statusColorModifiers;
