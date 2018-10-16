import styled from 'styled-components';
import { uiColors } from 'utils';

const Toggle = styled.input`
  width: 34px;
  background: ${uiColors('lightGray')};
  border: 1px solid ${uiColors('gray')};
  border-radius: 50px;
  padding: 9px;
  margin: 12px 0;
  transition: all ease 500ms;
  overflow: visible;

  &:checked {
    border: 1px solid ${uiColors('accentBlue')};
    background: ${uiColors('accentBlue')};
  }

  &:hover,
  &:checked:hover {
    background: ${uiColors('accentBlueFade')};
    border: 1px solid ${uiColors('accentBlue')};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    border: 1px solid ${uiColors('gray')};
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
    z-index: 2;
    background: #fff;
    border-radius: 50px;
    transition: all ease 300ms;
  }

  &:hover::after {
    border: 1px solid ${uiColors('accentBlue')};
  }

  &:checked::after {
    left: 13px;
  }
`;

/** @component */
export default Toggle;
