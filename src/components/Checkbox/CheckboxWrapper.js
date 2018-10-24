import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colors from 'config/colors';

const modifiers = {
  hoverDisabled: () => `
     background-color: red;
  `,
};

const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > input {
    display: none;
  }

  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 1px;
      width: 1rem;
      height: 1rem;
      border: 1px solid ${colors.gray};
      background: ${colors.white};
      border-radius: 2px;
      transition: all ease 300ms;
    }

    &::after {
      content: '✔';
      position: absolute;
      top: 1px;
      left: 2px;
      font-size: 1rem;
      color: #5ae;
      transition: all ease 300ms;
    }
  }

  > input:checked + label {
    &::before {
      border: 1px solid ${colors.accentBlue};
    }

    &:hover::before {
      border: 1px solid ${colors.gray};
      background: ${colors.accentBlueFade};
    }

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  > input:not(:checked) + label {
    &:hover::before {
      border: 1px solid ${colors.accentBlue};
      background-color: transparent;
    }

    &::after {
      opacity: 0;
      transform: scale(0);
    }
  }

  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &::before {
      border: 1px dotted ${colors.accentBlueFade};
    }
  }

  > input:disabled:checked + label {
    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }

    &::after {
      color: ${colors.gray};
      background: transparent;
    }
  }

  > input:disabled:not(:checked) + label {
    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }
  }

  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default CheckboxWrapper;
