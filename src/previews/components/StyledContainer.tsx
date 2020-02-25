import styled from 'styled-components';
import { Grid, ContainerProps } from '@inplayer-org/inplayer-ui';

const { Container } = Grid;

interface StyledContainerProps extends ContainerProps {
  margin?: string;
  padding?: string;
  maxHeight?: string;
  overflow?: string;
  borderTop?: string;
  backgroundColor?: string;
  height?: string;
}

const StyledContainer = styled(Container)`
  ${({ margin }: StyledContainerProps) => margin && `margin: ${margin}`};
  ${({ padding }: StyledContainerProps) => padding && `padding: ${padding}`};
  ${({ maxHeight }: StyledContainerProps) => maxHeight && `max-height: ${maxHeight}`};
  ${({ overflow }: StyledContainerProps) => overflow && `overflow: ${overflow}`};
  ${({ borderTop }: StyledContainerProps) => borderTop && `border-top: ${borderTop}`};
  ${({ backgroundColor }: StyledContainerProps) => backgroundColor && `background-color: ${backgroundColor}`};
  ${({ height }: StyledContainerProps) => height && `height: ${height}`};
`;

export default StyledContainer;
