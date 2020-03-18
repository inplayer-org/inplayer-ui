// @flow
import React, { ReactNode } from 'react';
import { LogoMenuContainer, NavbarLogo, MenuContainer } from './styled';

interface Props {
  logo?: Element | string;
  children: ReactNode;
}

const MenuWithLogo = ({ logo, children }: Props) => (
  <LogoMenuContainer>
    <NavbarLogo src={logo} />
    <MenuContainer>{children}</MenuContainer>
  </LogoMenuContainer>
);

export default MenuWithLogo;
