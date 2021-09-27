import styled, { CSSProperties } from 'styled-components';
import { AnalyticsProps } from '../../analytics';

type CellProps = {
  width?: CSSProperties;
  height?: CSSProperties;
  left?: CSSProperties;
  top?: CSSProperties;
  center?: CSSProperties;
  area?: CSSProperties;
  middle?: CSSProperties;
} & AnalyticsProps;

const Cell = styled.div<CellProps>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${({ center }) => center && `text-align: center`};
  ${({ area }) => area && `grid-area: ${area}`};
  ${({ middle }) =>
    middle &&
    `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `};
`;

export default Cell;
