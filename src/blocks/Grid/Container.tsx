import styled from 'styled-components';

interface Props {
  height: string;
  flow: string;
}
const autoRows = ({ minRowHeight = '20px' }: Record<string, any>) =>
  `minmax(${minRowHeight}, auto)`;
const frGetter = (value: number) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);
const formatAreas = (areas: any) => areas.map((area: any) => `"${area}"`).join(' ');
const GridContainer = styled.div<Props>`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-auto-flow: ${({ flow = 'row' }) => flow};
  grid-auto-rows: ${autoRows};
  ${(rows: any) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }: Record<string, any>) => frGetter(columns)};
  grid-gap: ${({ gap = '8px' }: Record<string, any>) => gap};
  ${(columnGap: Record<string, any>) => columnGap && `column-gap: ${columnGap}`};
  ${(rowGap: Record<string, any>) => rowGap && `row-gap: ${rowGap}`};
  ${(areas: Record<string, any>) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${(justifyContent: Record<string, any>) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${(alignContent: Record<string, any>) => alignContent && `align-content: ${alignContent}`};
`;
export default GridContainer;
