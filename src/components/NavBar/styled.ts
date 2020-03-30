import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'theme/colors';

export const NavbarContainer = styled.div<{ open: boolean }>`
  background-color: ${colors.darkBlue};
  width: ${ifProp('open', 190, 50)}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  cursor: pointer;
  justify-content: space-between;
  overflow: hidden;
`;

export const NavbarLogo = styled.img<{ src: any }>`
  align-self: center;
  height: 34px;
  margin: 0.5rem 0;
`;

export const MenuContainer = styled.nav`
  width: 100%;
  text-align: left;
  margin: 3.125rem 0 0;
`;

export const LogoMenuContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
