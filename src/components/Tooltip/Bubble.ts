import styled from 'styled-components';
import colors from '../../theme/colors';
import { AnalyticsProps } from '../../analytics';

type BubbleProps = {
  background?: string;
  radius?: number;
  border?: string;
  padding?: number;
  fontSize?: string;
} & AnalyticsProps;

const Bubble = styled.div<BubbleProps>`
  color: ${colors.white};
  background: ${({ background, theme }) => background || theme.palette.secondary.main};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '0.3em')};
  border: ${({ border, background, theme }) =>
    // eslint-disable-next-line no-nested-ternary
    border
      ? `1px solid ${border};`
      : background
      ? `1px solid ${background};`
      : theme.palette.secondary.main};
  padding: ${({ padding }) => `${padding}rem` || 0};
  font-size: ${({ fontSize, theme }) => fontSize || theme.font.sizes.small};
  line-height: 1.4;
`;

export default Bubble;
