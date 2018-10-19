import styled from 'styled-components';
import { uiColors } from 'utils';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colors from 'config/colors';

const modifiers = {
  hoverDisabled: () => `
    &:hover {
      background: ${colors.lightGray};
      border: 1px solid ${colors.gray};
      pointer-events: none;
    }
  `,
};

const Checkbox = styled.input`
  opacity: 0;
  vertical-align: middle;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  display: inline-block;
  background-color: ${colors.white};
  font-weight: 300;
  border: 1px solid ${colors.gray};
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
    border-right: 2px solid ${colors.white};
    border-bottom: 2px solid ${colors.white};
    transform: rotate(45deg);
    top: 0;
    left: 3px;
    width: 6px;
    height: 9px;
    border-radius: 2px;
    transition: all ease 300ms;
  }

  &:checked {
    border: 1px solid ${colors.accentBlueFade};
  }

  &:hover {
    background: ${colors.accentBlueFade};
    border: 1px solid ${uiColors('primary.main')};
  }

  &:checked::after {
    border-right: 2px solid ${uiColors('primary.main')};
    border-bottom: 2px solid ${uiColors('primary.main')};
  }

  &:checked:hover {
    border: 1px solid ${colors.gray};
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Checkbox;
