import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import colors from 'config/colors';
import { uiColors } from 'utils';

const Bubble = styled('div')`
  color: ${colors.white};
  background: ${ifProp('background', prop('background'), uiColors('secondary.main'))};
  border-radius: ${props => (props.radius ? `${props.radius}px` : '0.3em')};
  border: 1px solid ${props => props.border};
  padding: ${props => (props.padding ? `${props.padding}rem` : 0)};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
`;

export default Bubble;
