import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { transparentize } from 'polished';
import { ifProp, switchProp } from 'styled-tools';
import colors from 'theme/colors';
import { ButtonProps } from './Button';

const modifiers = {
  hoverInfo: () => `
  &:hover, &:focus {
    color: ${colors.blue};
    border-color: ${colors.blue};
  }
`,
  hoverDanger: () => `
  &:hover, &:focus {
    color: ${colors.red};
    border-color: ${colors.red};
  }
`,
  hoverWarning: () => `
  &:hover, &:focus {
    color: ${colors.yellow};
    border-color: ${colors.yellow};
  }
`,
  hoverSuccess: () => `
  &:hover, &:focus {
    color: ${colors.green};
    border-color: ${colors.green};
  }
`,
  buttonPrimary: ({ theme }: Record<string, any>) => `
  color: ${theme.palette.primary.main};
  border-color: ${theme.palette.primary.main};
  background: ${transparentize(0.94, theme.palette.primary.main)};

  &:hover, &:focus {
    color: ${colors.white};
    background: ${theme.palette.primary.main};
  }
`,
  buttonInfo: () => `
  color: ${colors.blue};
  border-color: ${colors.blue};
  background: ${transparentize(0.94, colors.blue)};

  &:hover, &:focus {
    color: ${colors.white};
    background: ${colors.blue};
    border-color: ${colors.blue};
  }
`,
  buttonWarning: () => `
  color: ${colors.yellow};
  border-color: ${colors.yellow};
  background: ${transparentize(0.94, colors.yellow)};

  &:hover, &:focus {
    color: ${colors.white};
    background: ${colors.yellow};
    border-color: ${colors.yellow};
  }
`,
  buttonDanger: () => `
  color: ${colors.red};
  border-color: ${colors.red};
  background: ${transparentize(0.94, colors.red)};

  &:hover, &:focus {
    color: ${colors.white};
    background: ${colors.red};
    border-color: ${colors.red};
  }
`,
  buttonSuccess: () => `
  color: ${colors.green};
  border-color: ${colors.green};
  background: ${transparentize(0.94, colors.green)};

  &:hover, &:focus {
    color: ${colors.white};
    background: ${colors.green};
    border-color: ${colors.green};
  }
`,
  buttonLink: ({ theme }: Record<string, any>) => `
  color: ${theme.palette.primary.main};
  border: none;
  background: transparent;
  display: inline;

  &:hover, &:focus {
    color: ${theme.palette.primary.dark};
  }

  &:disabled {
    background: transparent;
    background-color: transparent;
    font-style: italic;
    cursor: not-allowed;
  }
`,
};

type ButtonWrapperProps = ButtonProps & {
  modifiers?: Array<string>;
};

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  justify-content: center;
  background: ${colors.white};
  color: ${({ theme }) => theme.palette.text.main};
  font-weight: ${({ theme }) => theme.font.weights.light};
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  cursor: pointer;
  letter-spacing: 0.02em;
  outline: none;

  &:hover {
    border-color: ${colors.skyBlue};
    color: ${colors.skyBlue};
  }

  ${switchProp('sizeType', {
    xs: css`
      font-size: ${({ theme }) => theme.font.sizes.extraSmall};
      padding: 0.1875rem 0.25rem;
    `,
    sm: css`
      font-size: ${({ theme }) => theme.font.sizes.small};
      padding: 0.375rem 0.5rem;
    `,
    md: css`
      font-size: ${({ theme }) => theme.font.sizes.medium};
      padding: 0.5625rem 0.75rem;
    `,
    lg: css`
      font-size: ${({ theme }) => theme.font.sizes.large};
      padding: 0.75rem 1rem;
    `,
  })};
  ${applyStyleModifiers(modifiers)};
  ${ifProp(
    'disabled',
    css`
      color: ${({ theme }) => theme.palette.text.light}
      background-color: ${colors.lightGray};
      border-color: ${colors.gray};
      pointer-events: none;
    `
  )};
  ${ifProp(
    'fullWidth',
    css`
      width: 100%;
    `
  )};
  ${ifProp(
    'fullHeight',
    css`
      height: 100%;
    `
  )};
`;

ButtonWrapper.defaultProps = {
  sizeType: 'md',
  modifiers: [''],
};

export default ButtonWrapper;
