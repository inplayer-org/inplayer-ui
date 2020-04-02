import styled from 'styled-components';
import colors from 'theme/colors';
import { fontSizes } from 'utils';

type BubbleProps = {
  background?: string;
  radius?: number;
  border: string;
  padding?: number;
  fontSize?: string;
  fontFamily: string;
};

const Bubble = styled.div<BubbleProps>`
  color: ${colors.white};
  background: ${({ background }) => background || colors.blue};
  border-radius: ${({ radius }) => `${radius}px` || '0.3em'};
  border: 1px solid ${({ border }) => `${border}`};
  padding: ${({ padding }) => `${padding}rem` || 0};
  font-size: ${({ fontSize }) => fontSize || fontSizes('small')};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: 1.4;
`;

export default Bubble;
