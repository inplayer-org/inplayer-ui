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

const RadioInput = styled.input`
  display: inline-block;
  background: ${colors.white};
  font-weight: 300;
  border: 1px solid ${colors.white};
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
    background: ${colors.white};
    transform: rotate(45deg);
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 14px;
    transition: all ease 300ms;
  }

  &:checked {
    border: 1px solid ${uiColors('primary.main')};
  }

  &:checked::after {
    background: ${uiColors('primary.main')};
  }

  &:hover {
    background: ${uiColors(colors.accentBlueFade)};
    border: 1px solid ${uiColors('primary.main')};
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default RadioInput;
