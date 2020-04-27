import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge } from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';

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
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  cursor: pointer;
  vertical-align: middle;
  color: ${({ theme }) => theme.palette.text.main};
  transition: all ease 300ms;
  line-height: 20px;
  position: relative;
  display: inline-flex;

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
