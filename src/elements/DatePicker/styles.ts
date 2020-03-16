import styled from 'styled-components';
import { fontSizes, fontWeights } from 'utils';
import colors from 'theme/colors';
import Label from '../Label';

const StyledLabel = styled(Label)<{ active: boolean }>`
  display: block;
  font-size: ${fontSizes('small')};
  transition: ease 200ms color;
  cursor: pointer;
  padding: 0.4375rem;
  font-weight: ${({ active }) => (active ? fontWeights('normal') : fontWeights('light'))};
  color: ${({ active }) => (active ? colors.navy : colors.fontGray)};
  &:hover {
    color: ${colors.navy} !important;
  }
`;

const DatePresetWrapper = styled.div`
  width: 96px;
  padding: 3.75rem 1.25rem 0.625rem;
`;

export const Styled = {
  StyledLabel,
  DatePresetWrapper,
};
