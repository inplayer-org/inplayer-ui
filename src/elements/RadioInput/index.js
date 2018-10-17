import styled from 'styled-components';
import { uiColors } from 'utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  hoverDisabled: () => `
    &:hover {
      background: ${uiColors('lightGray')};
      border: 1px solid ${uiColors('gray')};
      pointer-events: none;
    }
  `,
};

const RadioInput = styled.input`
  display: flex;
  background: ${uiColors('white')};
  font-weight: 300;
  border: 1px solid ${uiColors('gray')};
  width: 16px;
  height: 16px;
  border-radius: 14px;
  cursor: pointer;
  position: relative;
  transition: all ease 300ms;

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: ${uiColors('white')};
    transform: rotate(45deg);
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 14px;
    transition: all ease 300ms;
  }

  &:checked {
    border: 1px solid ${uiColors('accentBlue')};
  }

  &:checked::after {
    background: ${uiColors('accentBlue')};
  }

  &:hover {
    background: ${uiColors('accentBlueFade')};
    border: 1px solid ${uiColors('accentBlue')};
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default RadioInput;
