import styled from 'styled-components';
import colors from 'config/colors';

export const AccordionWrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${colors.white};
  border-left: 1px solid ${colors.gray};
  box-sizing: border-box;
  border-top: 1px solid ${colors.gray};
  height: calc(46vh - 120px);
  overflow-y: hidden;
`;
