import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, fontSizes } from 'utils';
import { transparentize } from 'polished';
import { ifProp, switchProp } from 'styled-tools';
import colors from 'config/colors';

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
  buttonPrimary: ({ theme }) => `
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
};

const ButtonWrapper = styled.button`
  display: flex;
  background: ${colors.white};
  align-items: center;
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  font-size: ${fontSizes('medium')};
  justify-content: center;
  outline: none;
  transition: all ease 300ms;
  cursor: pointer;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;

  a {
    color: ${uiColors('text.light')};
  }

  &:hover {
    border-color: ${uiColors('primary.main')};
    color: ${uiColors('primary.main')};
  }

  span {
    padding: 0.2rem;
  }

  ${switchProp('size', {
    xs: css`
      font-size: ${fontSizes('extraSmall')};
      padding: 3px 4px;
    `,
    sm: css`
      font-size: ${fontSizes('small')};
      padding: 6px 8px;
    `,
    md: css`
      font-size: ${fontSizes('medium')};
      padding: 9px 12px;
    `,
    lg: css`
      font-size: ${fontSizes('large')};
      padding: 12px 16px;
    `,
  })};
  ${applyStyleModifiers(modifiers)};
  ${ifProp(
    'disabled',
    css`
      color: ${uiColors('text.light')};
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
`;

ButtonWrapper.defaultProps = {
  size: 'md',
};

/** @component */
export default ButtonWrapper;
