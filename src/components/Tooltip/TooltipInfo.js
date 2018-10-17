import styled from 'styled-components';
import { uiColors } from 'utils';

const TooltipInfo = styled.div`
  position: absolute;
  top: -100%;
  background: ${uiColors('lightGray')};
  border: 1px solid ${uiColors('gray')};
  text-align: center;
  display: none;
  width: auto;
  font-size: 15px;
  line-height: 21px;
`;

export default TooltipInfo;
