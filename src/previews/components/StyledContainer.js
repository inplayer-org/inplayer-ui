import styled from 'styled-components';
import { Grid } from 'blocks';

const { Container } = Grid;

const StyledContainer = styled(Container)`
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ borderTop }) => borderTop && `border-top: ${borderTop}`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  ${({ height }) => height && `height: ${height}`};
`;

export default StyledContainer;
