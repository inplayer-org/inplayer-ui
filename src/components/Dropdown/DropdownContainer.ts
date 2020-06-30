import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge } from '../../modifiers';
import colors from '../../theme/colors';

const fontSizeModifiers = {
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

const DropdownContainer = styled.select`
  border: 1px solid ${colors.gray};
  border-radius: 0.188em;
  color: ${({ theme }) => theme.palette.text.light};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weights.light};
  outline: none;
  transition: all 0.3s ease;
  padding: 0.6em 1.8em 0.5em 0.8em;
  line-height: 1.5em;
  background-color: ${colors.white};
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='grey'/></g></svg>");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin: 0;
  box-sizing: border-box;
  appearance: none;

  &:not(:disabled):hover {
    color: ${({ color }) => color || colors.skyBlue};
    border-color: ${({ color }) => color || colors.skyBlue};
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='#c8ccd4'/></g></svg>");
  }

  &:disabled {
    color: ${({ color }) => color || colors.fontLightGray};
    border-color: ${({ color }) => color || colors.fontLightGray};
  }

  > option {
    color: ${({ theme }) => theme.palette.text.light};
    font-weight: ${({ theme }) => theme.font.weights.light};
  }

  ${applyStyleModifiers(fontSizeModifiers)};
`;

export default DropdownContainer;
