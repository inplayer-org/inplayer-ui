import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontSizes, uiColors, fontWeights, paddingSizes } from 'utils';

const modifiers = {
  hoverDefault: () => `
    border-color: ${uiColors('accentBlue')};
    &:hover, &:focus {
      span {
        color: ${uiColors('accentBlue')};
      },
      i {
        color: ${uiColors('accentBlue')};
      }
    }
  `,
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
  background: ${uiColors('gray')};
  align-items: center;
  color: ${uiColors('fontGray')};
  font-weight: ${fontWeights('semiBold')};
  border: 1px solid ${uiColors('gray')};
  padding: ${paddingSizes('small')};
  border-radius: 3px;
  height: ${fontSizes('large')};
  justify-content: center;
  outline: none;
  transition: all 200ms ease;
  width: ${fontSizes('large')};
  cursor: pointer;
  vertical-align: middle;

  &:hover,
  &:focus {
    transform: scale(1.2);

    span {
      color: ${uiColors('accentBlue')};
    }
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Button;
