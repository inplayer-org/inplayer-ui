import styled, { DefaultTheme } from 'styled-components';
import colors from '../../theme/colors';

const CheckboxWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;

  > input {
    display: none;
  }

  > input + label {
    position: relative;
    padding-left: 1.5em;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1em;
      height: 1em;
      border: 1px solid ${colors.gray};
      background: ${colors.white};
      border-radius: 2px;
      transition: all ease 300ms;
    }

    &::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 4px;
      transition: all ease 300ms;
    }
  }

  > input:checked + label {
    &::before {
      border: 1px solid ${colors.skyBlue};
    }

    &::after {
      border: 2px solid ${colors.skyBlue};
      border-top: none;
      border-right: none;
      width: 0.5em;
      height: 0.25em;
      opacity: 1;
      transform: scale(1) rotate(-45deg);
    }
  }

  > input:not(:checked) + label {
    &::after {
      border: 2px solid ${colors.white};
      border-top: none;
      border-right: none;
      width: 0.5em;
      height: 0.25em;
      opacity: 1;
      transform: scale(0);
    }
  }

  > input:checked + label:hover {
    ::before {
      border-color: transparent;
      background: ${colors.lightSkyBlue};
    }

    ::after {
      border-color: ${colors.skyBlue};
    }
  }

  > input:not(:checked) + label:hover {
    ::before {
      border: 1px solid ${colors.skyBlue};
      background-color: ${colors.lightSkyBlue};
    }

    ::after {
      transform: scale(1) rotate(-45deg);
    }
  }

  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &::before {
      border: 1px dotted ${colors.lightSkyBlue};
    }
  }

  > input:disabled:checked + label {
    color: ${({ theme }) => theme.palette.text.disabled};

    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }

    &::after {
      border-color: ${colors.gray};
      background: transparent;
    }
  }

  > input:disabled:not(:checked) + label {
    color: ${({ theme }) => theme.palette.text.disabled};

    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }
  }
`;

export default CheckboxWrapper;
