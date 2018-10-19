import styled from 'styled-components';
import { uiColors } from 'utils';
import colors from 'config/colors';

const Tab = styled.a`
  font-size: 14px;
  letter-spacing: 0.05em;
  padding: 3px 20px;
  border-right: 1px solid ${colors.gray};
  display: flex;
  margin: 0;
  width: auto;
  background: ${colors.lightGray};
  color: ${uiColors('text.main')};

  &:hover {
    color: ${colors.fontDarkGray};
  }
`;

export default Tab;
