import styled from 'styled-components';

import colors from '../../theme/colors';
import Label from '../Label';

const StyledLabel = styled(Label)<{ active: boolean }>`
  display: block;
  font-size: ${({ theme }) => theme.font.sizes.small};
  transition: ease 200ms color;
  cursor: pointer;
  padding: 0.4375rem;
  font-weight: ${({ active, theme: { font } }) =>
    active ? font.weights.normal : font.weights.light};
  color: ${({ active }) => (active ? colors.navy : colors.fontGray)};
  &:hover {
    color: ${colors.navy} !important;
  }
`;

const DatePresetWrapper = styled.div`
  width: 96px;
  text-align: center;
  padding: 9rem 0 0.625rem 1rem;
`;

const CustomMonthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  margin: 0 0.1rem;
`;

export const Styled = {
  StyledLabel,
  DatePresetWrapper,
  CustomMonthContainer,
  DropdownContainer,
};
