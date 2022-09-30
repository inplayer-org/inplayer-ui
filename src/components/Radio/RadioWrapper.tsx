import styled from 'styled-components';
import Label from '../Label';
import colors from '../../theme/colors';

export const StyledLabel = styled(Label)<{ disabled: boolean }>`
  white-space: break-spaces;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  line-height: 20px;

  & span {
    width: 80%;
  }
`;

interface RootProps {
  disabled?: boolean;
  checked: boolean;
}

export const Root = styled.div<RootProps>`
  margin: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;

  &::before {
    content: '';
    border-radius: 100%;
    border: ${({ disabled, checked }) =>
      `1px solid ${disabled || !checked ? colors.gray : colors.skyBlue}`};
    background: ${colors.lightGray};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

export const Fill = styled.div`
  background: ${colors.skyBlue};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${colors.skyBlue};
    border-radius: 100%;
  }
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;
    }
    &::before {
      opacity: 1;
      transition: opacity 1s ease;
      border: 1px solid ${colors.skyBlue};
    }
    &:disabled {
      & ~ ${Fill} {
        background: ${colors.gray};
      }
    }
  }
`;
