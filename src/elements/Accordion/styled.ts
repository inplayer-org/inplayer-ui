import styled from 'styled-components';
import colors from 'theme/colors';

export const AccordionWrapper = styled.div<{
  width?: string;
  extendWidth?: string;
  open: boolean;
  contentHeight: string;
}>`
  ${({ width }) => width && `width: ${width}`};
  margin-left: 0%;
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
  transition: width 0.3s ease;
  ${({ open, width, extendWidth }) => open && width && `width: calc(${width} + ${extendWidth})`};
`;
