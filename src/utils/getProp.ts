import { DefaultTheme } from 'styled-components';

export default (prop: string, theme: DefaultTheme) => prop.split('.').reduce((a, b) => a[b], theme);
