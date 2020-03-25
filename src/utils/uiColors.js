import getProp from './getProp';

const uiColors = (color) => (props) => getProp(`palette.${color}`, props.theme);

export default uiColors;
