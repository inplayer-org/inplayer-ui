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

const Checkbox = styled.input`
  vertical-align: middle;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  display: flex;
  background: ${uiColors('white')};
  font-weight: 300;
  border: 1px solid ${uiColors('gray')};
  width: 16px;
  height: 16px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  transition: all ease 300ms;

  &::after {
    content: '';
    display: block;
    position: absolute;
    border-right: 2px solid ${uiColors('white')};
    border-bottom: 2px solid ${uiColors('white')};
    transform: rotate(45deg);
    top: 0;
    left: 3px;
    width: 6px;
    height: 9px;
    border-radius: 2px;
    transition: all ease 300ms;
  }

  &:checked {
    border: 1px solid ${uiColors('accentBlueFade')};
  }

  &:hover {
    background: ${uiColors('accentBlueFade')};
    border: 1px solid ${uiColors('accentBlue')};
  }

  &:checked::after {
    border-right: 2px solid ${uiColors('accentBlue')};
    border-bottom: 2px solid ${uiColors('accentBlue')};
  }

  &:checked:hover {
    border: 1px solid ${uiColors('gray')};
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Checkbox;
