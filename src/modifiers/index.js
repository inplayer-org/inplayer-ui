// this is the primary export for Modifiers
import fontColorModifiers from './fontColors';
import fontSizeModifiers from './fontSizes';
import fontWeightModifiers from './fontWeights';
import statusColorModifiers from './statusColors';

const positionRelative = () => `
  position: relative;
`;

export {
  positionRelative,
  fontColorModifiers,
  fontSizeModifiers,
  fontWeightModifiers,
  statusColorModifiers,
};
