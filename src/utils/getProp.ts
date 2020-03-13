import { DefaultTheme } from 'styled-components';

const getProp = (prop: string, theme: DefaultTheme) =>
  prop.split('.').reduce((a, b) => a[b], theme);

export default getProp;
