import styled from 'styled-components';
import colors from 'config/colors';

const Notification = styled.p`
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  padding: 18px 2%;
  border-radius: 3px;
  background: ${colors.white};
`;

/** @component */
export default Notification;
