import React, { ReactNode } from 'react';
import { LogoMenuContainer, NavbarLogo, MenuContainer } from './styled';

type Props = {
  logo?: string;
  children: ReactNode;
  onLogoClick?: () => any;
};

const MenuWithLogo = ({ logo, children, onLogoClick }: Props) => {
  const onClick = (e: any) => {
    if (onLogoClick) {
      e.stopPropagation();
      onLogoClick();
    }
  };
  return (
    <LogoMenuContainer>
      <NavbarLogo src={logo} onClick={onClick} />
      <MenuContainer>{children}</MenuContainer>
    </LogoMenuContainer>
  );
};

export default MenuWithLogo;
