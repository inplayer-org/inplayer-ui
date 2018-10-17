import styled from 'styled-components';
import { uiColors } from 'utils';

const Notification = styled.p`
  box-sizing: border-box;
  border: 1px solid ${uiColors('gray')};
  padding: 18px 2%;
  border-radius: 3px;
  background: ${uiColors('white')};
`;

/** @component */
export default Notification;
