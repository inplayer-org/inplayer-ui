import styled from 'styled-components';
import colors from 'config/colors';

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${colors.white};

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;

/** @component */
export default Checkmark;
