import styled from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';

export const AccordionWrapper = styled.div`
  width: ${ifProp('open', 120, 100)}%;
  margin-left: ${ifProp('open', -20, 0)}%;
  position: relative;
  background: ${colors.white};
  border-left: 1px solid ${colors.gray};
  box-sizing: border-box;
  border-top: 1px solid ${colors.gray};
  ${({ contentHeight }) => contentHeight && `height: calc(${contentHeight} - 120px)`};
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
