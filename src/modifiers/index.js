// this is the primary export for Modifiers
import fontColorModifiers from './fontColors';
import fontSizeModifiers from './fontSizes';
import fontWeightModifiers from './fontWeights';
import statusColorModifiers from './statusColors';
import paddingSizeModifiers from './paddingSizes';
import borderColorModifiers from './borderColors';
import backgroundColorModifiers from './backgroundColors';

const positionRelative = () => `
  position: relative;
`;

export {
  positionRelative,
  fontColorModifiers,
  fontSizeModifiers,
  fontWeightModifiers,
  statusColorModifiers,
  paddingSizeModifiers,
  borderColorModifiers,
  backgroundColorModifiers,
};
