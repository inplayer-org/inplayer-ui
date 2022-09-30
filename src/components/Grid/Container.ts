import styled, { CSSProperties, CSSObject } from 'styled-components';
import { AnalyticsProps } from '../../analytics';

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value: any) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);

const formatAreas = (areas: any[]) => areas.map((area: any) => `"${area}"`).join(' ');

type GridContainerProps = {
  height?: CSSObject;
  flow?: CSSObject;
  minRowHeight?: string;
  rows?: CSSProperties;
  columns?: CSSProperties;
  gap?: string;
  columnGap?: CSSProperties;
  rowGap?: CSSProperties;
  areas?: any;
  justifyContent?: CSSProperties;
  alignContent?: CSSProperties;
} & AnalyticsProps;

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-auto-flow: ${({ flow = 'row' }) => flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${({ gap = '8px' }) => gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

export default GridContainer;
