import getProp from './getProp';

export default (color: string) => (props: any) => getProp(`palette.${color}`, props.theme);
