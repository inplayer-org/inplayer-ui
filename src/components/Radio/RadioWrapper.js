import styled from 'styled-components';
import { uiColors } from 'utils';
import colors from 'config/colors';

const RadioWrapper = styled.div`
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
      border-radius: 50%;
      transition: all ease 300ms;
    }

    &::after {
      content: '●';
      position: absolute;
      bottom: 1px;
      left: 1px;
      font-size: 1.7rem;
      color: ${uiColors('primary.main')};
      transition: all ease 300ms;
    }
  }

  > input:checked + label {
    &::before {
      border: 1px solid ${uiColors('primary.main')};
    }

    &:hover::before {
      border: 1px solid ${colors.gray};
      background: ${colors.deepSkyBlue};
    }

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  > input:not(:checked) + label {
    &:hover::before {
      border: 1px solid ${uiColors('primary.main')};
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
      border: 1px dotted ${uiColors('primary.main')};
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
`;

/** @component */
export default RadioWrapper;
