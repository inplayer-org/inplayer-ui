import getProp from './getProp';

const uiColors = (color: string) => (props: any) => getProp(`palette.${color}`, props.theme);

export default uiColors;
