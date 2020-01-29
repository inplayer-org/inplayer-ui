import styled, { keyframes } from 'styled-components';
import { prop, ifProp } from 'packages/inplayer-ui/src/elements/Loader/styled-tools';
import { uiColors } from 'packages/inplayer-ui/src/elements/Loader/utils';
import { transparentize } from 'packages/inplayer-ui/src/elements/Loader/polished';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border-radius: 50%;
  width: 6em;
  height: 6em;
  font-size: 10px;
  border: 1.1em solid
    ${({ theme, color }) => transparentize(0.8, color || theme.palette.primary.main)};
  border-left: 1.1em solid ${ifProp('color', prop('color'), uiColors('primary.main'))};
  animation: ${spin} 0.8s infinite linear;

  &::after {
    width: 8em;
    height: 8em;
  }
`;

export default Loader;
