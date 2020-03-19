import styled from 'styled-components';

interface Props {
  height: string;
  flow: string;
}

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value: number) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);

const formatAreas = (areas: any) => areas.map((area: any) => `"${area}"`).join(' ');

const GridContainer = styled.div<Props>`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-auto-flow: ${({ flow = 'row' }) => flow};
  grid-auto-rows: ${autoRows};
  ${(rows: any) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${({ gap = '8px' }) => gap};
  ${(columnGap: string) => columnGap && `column-gap: ${columnGap}`};
  ${(rowGap: string) => rowGap && `row-gap: ${rowGap}`};
  ${(areas: string) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${(justifyContent: string) => justifyContent && `justify-content: ${justifyContent}`};
  ${(alignContent: string) => alignContent && `align-content: ${alignContent}`};
`;

export default GridContainer;
