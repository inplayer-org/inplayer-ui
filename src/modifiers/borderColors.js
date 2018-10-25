import colors from 'config/colors';

const borderColorModifiers = {
  borderBlue: () => `
    border: 1px solid ${colors.blue})};
  `,
  borderRed: () => `
    border: 1px solid ${colors.red};
  `,
  borderGreen: () => `
    border: 1px solid ${colors.green};
  `,
};

export default borderColorModifiers;
