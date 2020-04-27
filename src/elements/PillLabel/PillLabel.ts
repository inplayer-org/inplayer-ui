import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { transparentize } from 'polished';
import { switchProp } from 'styled-tools';
import colors from 'theme/colors';

const modifiers = {
  primary: () => `
    color: ${colors.skyBlue};
    border-color: ${colors.skyBlue};
    background: ${transparentize(0.94, colors.skyBlue)};
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

const PillLabel = styled.span<{ size?: string; modifiers?: Array<string> }>`
  display: inline-block;
  background: ${colors.white};
  color: ${({ theme }) => theme.palette.text.main};
  font-weight: 300;
  border: 1px solid ${colors.gray};
  border-radius: 1rem;
  font-size: rem(16);
  outline: none;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;
  ${switchProp('size', {
    xs: css`
      font-size: rem(14);
      padding: 0.1875rem 0.25rem;
    `,
    sm: css`
      font-size: rem(14);
      padding: 0.375rem 0.5rem;
    `,
    md: css`
      font-size: rem(16);
      padding: 0.5625rem 0.75rem;
    `,
    lg: css`
      font-size: rem(18);
      padding: 0.75rem 1rem;
    `,
  })};
  ${applyStyleModifiers(modifiers)};
`;

PillLabel.defaultProps = {
  size: 'md',
};

export default PillLabel;
