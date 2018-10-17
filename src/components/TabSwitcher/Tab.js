import styled from 'styled-components';
import { uiColors } from 'utils';

const Tab = styled.a`
  font-size: 14px;
  letter-spacing: 0.05em;
  padding: 3px 20px;
  border-right: 1px solid ${uiColors('gray')};
  display: flex;
  margin: 0;
  width: auto;
  background: ${uiColors('lightGray')};
  color: ${uiColors('fontGray')};

  &:hover {
    color: ${uiColors('fontDarkGray')};
  }
`;

export default Tab;
