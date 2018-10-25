import styled from 'styled-components';
import colors from 'config/colors';
import uiColors from 'utils/uiColors';

const CheckboxWrapper = styled.div`
  > input {
    display: none;
  }

  > input + label {
    position: relative;
    padding-left: 1.5rem;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 1rem;
      height: 1rem;
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
      border: 1px solid ${uiColors('primary.main')};
    }

    &::after {
      border: 2px solid ${uiColors('primary.main')};
      border-top: none;
      border-right: none;
      width: 0.5rem;
      height: 0.25rem;
      opacity: 1;
      transform: scale(1) rotate(-45deg);
    }
  }

  > input:not(:checked) + label {
    &::after {
      border: 2px solid ${colors.white};
      border-top: none;
      border-right: none;
      width: 0.5rem;
      height: 0.25rem;
      opacity: 1;
      transform: scale(0);
    }
  }

  > input:checked + label:hover {
    ::before {
      border-color: ${colors.gray};
      background: ${uiColors('primary.light')};
    }

    ::after {
      border-color: ${colors.white};
    }
  }

  > input:not(:checked) + label:hover {
    ::before {
      border: 1px solid ${uiColors('primary.main')};
      background-color: transparent;
    }

    ::after {
      transform: scale(1) rotate(-45deg);
    }
  }

  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &::before {
      border: 1px dotted ${uiColors('primary.light')};
    }
  }

  > input:disabled:checked + label {
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
    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }
  }
`;

/** @component */
export default CheckboxWrapper;
