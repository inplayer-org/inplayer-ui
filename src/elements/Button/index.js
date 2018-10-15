import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontSizes, uiColors, statusColors, fontWeights } from 'utils';

const modifiers = {
  hoverDanger: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('danger', theme)};
      }
    }
  `,
  hoverInfo: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('info', theme)};
      }
    }
  `,
  hoverSuccess: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('success', theme)};
      }
    }
  `,
  hoverWarning: ({ theme }) => `
      &:hover, &:focus {
      span {
        color: ${statusColors('warning', theme)};
      }
    }
  `,
};

const Button = styled.button`
  display: flex;
  background: ${uiColors('lines')};
  align-items: center;
  color: ${uiColors('fontcolorSec')};
  font-weight: ${fontWeights('semiBold')};
  border: 1px solid ${uiColors('lines')};
  padding: 10px 20px 11px;
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
      color: ${statusColors('default')};
    }
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Button;
