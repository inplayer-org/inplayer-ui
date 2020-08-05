import React, { useState } from 'react';

// Components
import Arrow from './Arrow';
import { NavbarContainer } from './styled';
import MenuItem from './MenuItem';
import MenuWithLogo from './MenuWithLogo';

type Props = {
  children: any;
  /**
   * Navbar logo
   */
  logo?: string;
  onLogoClick?: () => any;
  logoTitle?: string;
};

const Navbar = ({ children, logo, onLogoClick, logoTitle }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <NavbarContainer open={open} onClick={toggleOpen}>
      <MenuWithLogo logo={logo} onLogoClick={onLogoClick} logoTitle={logoTitle}>
        {children}
      </MenuWithLogo>
      <Arrow open={open} section="navbar" />
    </NavbarContainer>
  );
};

Navbar.MenuItem = MenuItem;

export default Navbar;
