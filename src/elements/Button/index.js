import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, paddingSizes } from 'utils';
import colors from 'config/colors';

const modifiers = {
  hoverBlue: () => `
    background: ${uiColors('primary.main')};
    &:hover, &:focus {
      span {
        color: ${colors.white};
      },
      i {
        color: ${colors.white};
      }
    }
  `,
  hoverRed: () => `
    background: ${colors.red};
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

    span {
      color: ${uiColors('primary.main')};
    }

    i {
      color: ${uiColors('text.main')};
    }
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Button;
