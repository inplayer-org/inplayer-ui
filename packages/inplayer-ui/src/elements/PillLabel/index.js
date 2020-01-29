import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, fontSizes } from 'packages/inplayer-ui/src/elements/PillLabel/utils';
import { transparentize } from 'packages/inplayer-ui/src/elements/PillLabel/polished';
import { switchProp } from 'packages/inplayer-ui/src/elements/PillLabel/styled-tools';
import colors from 'packages/inplayer-ui/src/config/colors';

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
  display: inline-block;
  background: ${colors.white};
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  border-radius: 1rem;
  font-size: ${fontSizes('medium')};
  outline: none;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;
  ${switchProp('size', {
    xs: css`
      font-size: ${fontSizes('extraSmall')};
      padding: 0.1875rem 0.25rem;
    `,
    sm: css`
      font-size: ${fontSizes('small')};
      padding: 0.375rem 0.5rem;
    `,
    md: css`
      font-size: ${fontSizes('medium')};
      padding: 0.5625rem 0.75rem;
    `,
    lg: css`
      font-size: ${fontSizes('large')};
      padding: 0.75rem 1rem;
    `,
  })};
  ${applyStyleModifiers(modifiers)};
`;

PillLabel.defaultProps = {
  size: 'md',
};

/** @component */
export default PillLabel;
