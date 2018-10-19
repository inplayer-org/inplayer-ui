import getProp from './getProp';

function uiColors(color) {
  return props => getProp(`palette.${color}`, props.theme);
}

export default uiColors;
