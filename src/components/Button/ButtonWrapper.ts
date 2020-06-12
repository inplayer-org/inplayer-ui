import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { transparentize, darken } from 'polished';
import { ifProp, switchProp } from 'styled-tools';
import colors from '../../theme/colors';
import { Props as ButtonWrapperProps } from './Button';

const modifiers = {
  hoverInfo: () => `
    color: ${colors.blue};
    background: ${colors.white};
    box-shadow: none;

    &:hover, &:focus {
      color: ${colors.blue};
      background: ${transparentize(0.9, colors.blue)};
      box-shadow: none;
    }
  `,
  hoverDanger: () => `
    color: ${colors.red};
    background: ${colors.white};
    box-shadow: none;

    &:hover, &:focus {
      color: ${colors.red};
      background: ${transparentize(0.9, colors.red)};
      box-shadow: none;
    }
  `,
  hoverWarning: () => `
    color: ${colors.sunFlower};
    background: ${colors.white};
    box-shadow: none;

    &:hover, &:focus {
      color: ${colors.sunFlower};
      background: ${transparentize(0.9, colors.sunFlower)};
      box-shadow: none;
    }
  `,
  hoverSuccess: () => `
    color: ${colors.green};
    background: ${colors.white};
    box-shadow: none;

    &:hover, &:focus {
      color: ${colors.green};
      background: ${transparentize(0.9, colors.green)};
      box-shadow: none;
    }
  `,
  buttonPrimary: ({ theme }: Record<string, any>) => `
    background: ${theme.palette.primary.main};

    &:hover, &:focus {
      background: ${darken(0.04, theme.palette.primary.main)};
    }
  `,
  buttonInfo: () => `
    background: ${colors.blue};

    &:hover, &:focus {
      background: ${darken(0.04, colors.blue)};
    }
  `,
  buttonWarning: () => `
    background: ${colors.sunFlower};

    &:hover, &:focus {
      background: ${darken(0.04, colors.sunFlower)};
    }
  `,
  buttonDanger: () => `
    background: ${colors.red};

    &:hover, &:focus {
      background: ${darken(0.04, colors.red)};
    }
  `,
  buttonSuccess: () => `
     background: ${colors.green};

    &:hover, &:focus {
      background: ${darken(0.04, colors.green)};
    }
  `,
  buttonLink: ({ theme }: Record<string, any>) => `
    color: ${theme.palette.primary.main};
    border: none;
    background: transparent;
    box-shadow: none;


    &:hover, &:focus {
      color: ${theme.palette.primary.main};
      background-color: ${transparentize(0.9, theme.palette.primary.main)};
      box-shadow: none;
    }

    &:disabled {
      background: transparent;
      background-color: transparent;
      font-style: italic;
      cursor: not-allowed;
    }
  `,
};

type Props = ButtonWrapperProps & {
  modifiers?: Array<string>;
};

const ButtonWrapper = styled.button<Props>`
  border-radius: 5px;
  color: ${colors.white};
  background-color: ${colors.skyBlue};
  border: none;
  box-shadow: 0 0 4px 1px ${transparentize(0.87, colors.fontDarkGray)};
  transition: all 200ms linear;
  cursor: pointer;
  padding: 0.5rem;
  text-align: center;
  :hover {
    background-color: ${darken(0.04, colors.skyBlue)};
    box-shadow: 0 0 8px 1px ${transparentize(0.87, colors.fontDarkGray)};
    color: ${colors.white};
  }

  ${switchProp('size', {
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
      color: ${colors.fontGray};
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
  size: 'md',
  modifiers: [''],
};

export default ButtonWrapper;
