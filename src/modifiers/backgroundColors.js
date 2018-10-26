import colors from 'config/colors';

const backgroundColorModifiers = {
  backgroundBlue: () => `
    background: ${colors.blue};
  `,
  backgroundRed: () => `
    background: ${colors.red}};
  `,
  backgroundGreen: () => `
    background: ${colors.green}};
  `,
};

export default backgroundColorModifiers;
