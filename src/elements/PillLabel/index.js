import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, fontSizes } from 'utils';
import { transparentize } from 'polished';
import { switchProp } from 'styled-tools';
import colors from 'config/colors';

const modifiers = {
  primary: ({ theme }) => `
    color: ${theme.palette.primary.main};
    border-color: ${theme.palette.primary.main};
    background: ${transparentize(0.94, theme.palette.primary.main)};
  `,
  info: () => `
    color: ${colors.blue};
    border-color: ${colors.blue};
    background: ${transparentize(0.94, colors.blue)};
  `,
  warning: () => `
    color: ${colors.yellow};
    border-color: ${colors.yellow};
    background: ${transparentize(0.94, colors.yellow)};
  `,
  danger: () => `
    color: ${colors.red};
    border-color: ${colors.red};
    background: ${transparentize(0.94, colors.red)};
  `,
  success: () => `
    color: ${colors.green};
    border-color: ${colors.green};
     background: ${transparentize(0.94, colors.green)};
  `,
};

const PillLabel = styled.span`
  display: flex;
  background: ${colors.white};
  align-items: center;
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  border-radius: 1rem;
  font-size: ${fontSizes('medium')};
  justify-content: center;
  outline: none;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;
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
`;

PillLabel.defaultProps = {
  size: 'md',
};

/** @component */
export default PillLabel;
