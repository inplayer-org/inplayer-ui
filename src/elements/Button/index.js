import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontSizes, uiColors, fontWeights, paddingSizes } from 'utils';

const modifiers = {
  hoverBlue: () => `
    background: ${uiColors('accentBlue')};
    &:hover, &:focus {
      span {
        color: ${uiColors('white')};
      },
      i {
        color: ${uiColors('white')};
      }
    }
  `,
  hoverRed: () => `
    background: ${uiColors('pink')};
  `,
};

const Button = styled.button`
  display: flex;
  background: ${uiColors('white')};
  align-items: center;
  color: ${uiColors('fontGray')};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${uiColors('gray')};
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
    border-color: ${uiColors('accentBlue')};

    span {
      color: ${uiColors('accentBlue')};
    }

    ,
    i {
      color: ${uiColors('accentBlue')};
    }
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Button;
