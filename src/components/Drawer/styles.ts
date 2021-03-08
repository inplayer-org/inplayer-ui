import { ImCross } from 'react-icons/im';
import styled, { css } from 'styled-components';

import colors from '../../theme/colors';

interface SideDrawerProps {
  isOpen: boolean;
  width: string;
}
export const SideDrawer = styled.div<SideDrawerProps>`
  height: 100%;
  background: ${colors.white};
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ width }) => width};
  z-index: 1000;

  transform: translateX(100%);
  transition: transform 0.4s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
      box-shadow: 0 20px 25px 10000px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    `}
`;
export const CloseSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;
export const StyledIcon = styled(ImCross)`
  color: ${colors.fontGray};

  :hover {
    color: ${colors.fontDarkGray};
    cursor: pointer;
  }
`;
