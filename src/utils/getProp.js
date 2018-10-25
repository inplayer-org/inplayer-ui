// @flow
import type { Theme } from 'types/Theme';

const getProp = (prop: string, theme: Theme) => prop.split('.').reduce((a, b) => a[b], theme);

export default getProp;
