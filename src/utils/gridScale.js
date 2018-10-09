import { rem } from 'polished';

function gridScale(scale, theme) {
  if (theme) {
    return rem(theme.dimensions.baseGrid * scale);
  }
  return props => rem(props.theme.dimensions.baseGrid * scale);
}

export default gridScale;
