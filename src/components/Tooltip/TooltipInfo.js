import styled from 'styled-components';
import colors from 'config/colors';

const TooltipInfo = styled.div`
  position: absolute;
  top: -100%;
  background: ${colors.lightGray};
  border: 1px solid ${colors.gray};
  text-align: center;
  display: none;
  width: auto;
  font-size: 15px;
  line-height: 21px;
`;

export default TooltipInfo;
