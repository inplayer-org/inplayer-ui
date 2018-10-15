import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontColorModifiers } from '../../modifiers';
import theme from '../../../config/theme';

const {
  colors: { white, fontcolorSec, lines },
  font: {
    weights: { light },
  },
} = theme;

const modifiers = {
  ...fontColorModifiers,
};

const Button = styled.button`
  display: inline-block;
  background: ${white};
  color: ${fontcolorSec};
  font-weight: ${light};
  border: 1px solid ${lines};
  padding: 10px 20px 11px;
  border-radius: 3px;
  font-size: 15px;
  letter-spacing: 0.015em;
  line-height: 1;
  transition: all ease 300ms;
  cursor: pointer;
  vertical-align: middle;
  ${applyStyleModifiers(modifiers)};
`;

// @component
export default Button;
