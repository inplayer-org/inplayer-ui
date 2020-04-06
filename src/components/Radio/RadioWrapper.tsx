import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Colors from '../../theme/colors';

const RadioContainer = styled.div`
  display: inline-block;

  > input {
    opacity: 0;
  }

  > input + label {
    position: relative;
    padding-left: 1.5rem;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: -0.61px;
      top: 1px;
      width: 1rem;
      height: 1rem;
      border: 1px solid ${Colors.gray};
      background: ${Colors.white};
      border-radius: 100%;
    }

    &::after {
      content: '●';
      position: absolute;
      top: -0.1rem;
      left: 0.09rem;
      font-size: 1.4rem;
      color: ${Colors.skyBlue};
      transition: all 0.2s;
    }
  }

  > input:not(:checked) + label {
    &::after {
      opacity: 0;
      transform: scale(0);
    }
  }

  > input:checked + label {
    &::before {
      border: 1px solid ${Colors.skyBlue};
    }

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  > input:disabled:not(:checked) + label {
    color: ${Colors.fontLightGray};

    &::before {
      border: 1px solid ${Colors.gray};
      background: transparent;
    }
  }

  > input:disabled:checked + label {
    color: ${Colors.fontLightGray};

    &::before {
      border: 1px solid ${Colors.gray};
      background: transparent;
    }

    &::after {
      color: ${Colors.gray};
      background: transparent;
    }
  }

  > input:checked:focus + label {
    &::before {
      border: 1px solid ${Colors.skyBlue};
    }
  }

  > input:not(:checked):focus + label {
    &::before {
      border: 1px solid ${Colors.gray};
    }
  }
`;

interface Props {
  children: ReactNode;
}

export const RadioWrapper = ({ children }: Props) => <RadioContainer> {children} </RadioContainer>;
