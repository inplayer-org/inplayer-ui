import styled from 'styled-components';
import Grid from 'blocks';

const { Container } = Grid;

type Props = {
  margin?: string;
  padding?: string;
  maxHeight?: string;
  overflow?: string;
  borderTop?: string;
  backgroundColor?: string;
  height?: string;
  columns?: string;
};

const StyledContainer = styled(Container)<Props>`
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ borderTop }) => borderTop && `border-top: ${borderTop}`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  ${({ height }) => height && `height: ${height}`};
`;

export default StyledContainer;
