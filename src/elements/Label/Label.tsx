import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge } from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontSizes, fontWeights } from "utils";

const typographyModifiers = {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

const Label = styled.label<{ disabled?: boolean }>`
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-size:${({ theme }) => theme.font.sizes.medium};
  font-weight: ${fontWeights('normal')};
  cursor: pointer;
  vertical-align: middle;
  color: ${uiColors('text.main')};
  transition: all ease 300ms;
  line-height: 20px;
  position: relative;
  display: inline-flex;

  &:not(:disabled):hover {
    color: ${uiColors('text.light')};
  }

  ${ifProp(
    'disabled',
    css`
      color: ${uiColors('text.disabled')};
      pointer-events: none;
    `
  )};
  ${applyStyleModifiers(typographyModifiers)};
`;

export default Label;
