// @flow
import React, { type Node, type Element } from 'packages/inplayer-ui/src/components/NavBar/react';
import { LogoMenuContainer, NavbarLogo, MenuContainer } from './styled';

type Props = {
  logo: ?Element<*> | ?string,
  children: Node,
};

const MenuWithLogo = ({ logo, children }: Props) => (
  <LogoMenuContainer>
    <NavbarLogo src={logo} />
    <MenuContainer>{children}</MenuContainer>
  </LogoMenuContainer>
);

export default MenuWithLogo;
