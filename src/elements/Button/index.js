import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, paddingSizes } from 'utils';
import colors from 'config/colors';

const modifiers = {
  hoverBlue: () => `
    &:hover, &:focus {
      color: ${colors.accentBlue};
    }
  `,
  hoverRed: () => `
    &:hover, &:focus {
      color: ${colors.red};
      border-color: ${colors.red};
    }
  `,
  hoverGreen: () => `
    &:hover, &:focus {
      color: ${colors.green};
      border-color: ${colors.green};
    }
  `,
};

const Button = styled.button`
  display: flex;
  background: ${colors.white};
  align-items: center;
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  padding: ${paddingSizes('small')};
  border-radius: 3px;
  font-size: 15px;
  justify-content: center;
  outline: none;
  transition: all ease 300ms;
  cursor: pointer;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;

  &:hover {
    border-color: ${uiColors('primary.main')};
    color: ${uiColors('primary.main')};
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Button;
