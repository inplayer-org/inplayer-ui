import styled, { css } from 'styled-components';
import { uiColors, fontWeights } from 'packages/inplayer-ui/src/elements/Label/utils';
import { ifProp } from 'packages/inplayer-ui/src/elements/Label/styled-tools';
import { fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge } from 'packages/inplayer-ui/src/elements/Label/modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';

const typographyModifiers = {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

const Label = styled.label`
  text-decoration: none;
  font-weight: ${fontWeights('light')};
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
