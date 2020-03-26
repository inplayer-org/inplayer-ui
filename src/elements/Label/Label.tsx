import styled, { css } from 'styled-components';
import { fontWeights } from 'utils';
import { ifProp } from 'styled-tools';
import {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
} from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colors from 'theme/colors';

const typographyModifiers = {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

const Label = styled.label<{ disabled?: boolean }>`
  text-decoration: none;
  font-weight: ${fontWeights('light')};
  cursor: pointer;
  vertical-align: middle;
  color: ${colors.fontDarkGray};
  transition: all ease 300ms;
  line-height: 20px;
  position: relative;
  display: inline-flex;

  &:not(:disabled):hover {
    color: ${colors.fontGray};
  }

  ${ifProp(
    'disabled',
    css`
      color: ${colors.fontLightGray};
      pointer-events: none;
    `
  )};
  ${applyStyleModifiers(typographyModifiers)};
`;

export default Label;
