import styled from 'styled-components';
import colors from 'theme/colors';

type BubbleProps = {
  background?: string;
  radius?: number;
  border?: string;
  padding?: number;
  fontSize?: string;
  fontFamily: string;
};

const Bubble = styled.div<BubbleProps>`
  color: ${colors.white};
  background: ${(props) => props.background || props.theme.palette.secondary.main};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '0.3em')};
  border: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.border
      ? `1px solid ${props.border};`
      : props.background
      ? `1px solid ${props.background};`
      : props.theme.palette.secondary.main};
  padding: ${({ padding }) => `${padding}rem` || 0};
  font-size: ${({ fontSize, theme }) => fontSize || theme.font.sizes.small};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: 1.4;
`;

export default Bubble;
