import styled, { css } from 'styled-components';
import { uiColors, fontWeights, fontSizes } from 'utils';
import { ifProp } from 'styled-tools';
import { fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge } from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';

const typographyModifiers = {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

const Label = styled.label`
  text-decoration: none;
  font-size: ${fontSizes('medium')};
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
