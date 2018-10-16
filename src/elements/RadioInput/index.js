import styled from 'styled-components';
import { uiColors } from 'utils';

const RadioInput = styled.input`
  display: inline-block;
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
`;

/** @component */
export default RadioInput;
