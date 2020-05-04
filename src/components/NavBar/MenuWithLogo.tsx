import React, { ReactNode } from 'react';
import { LogoMenuContainer, NavbarLogo, MenuContainer } from './styled';

type Props = {
  logo?: string;
  children: ReactNode;
};

const MenuWithLogo = ({ logo, children }: Props) => (
  <LogoMenuContainer>
    <NavbarLogo src={logo} />
    <MenuContainer>{children}</MenuContainer>
  </LogoMenuContainer>
);

export default MenuWithLogo;
