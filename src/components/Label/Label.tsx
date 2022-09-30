import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge } from '../../modifiers';
import { AnalyticsProps } from '../../analytics';

const typographyModifiers = {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

const Label = styled.label<{ disabled?: boolean } & AnalyticsProps>`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  color: ${({ theme }) => theme.palette.text.main};
  cursor: pointer;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.palette.text.light};
  }

  ${ifProp(
    'disabled',
    css`
      color: ${({ theme }) => theme.palette.text.disabled};
      pointer-events: none;
    `
  )};
  ${applyStyleModifiers(typographyModifiers)};
`;

export default Label;
