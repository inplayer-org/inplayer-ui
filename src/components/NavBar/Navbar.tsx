import React, { useState } from 'react';

// Components
import { CSSProperties } from 'styled-components';
import Arrow from './Arrow';
import { NavbarContainer } from './styled';
import MenuItem from './MenuItem';
import MenuWithLogo from './MenuWithLogo';

type Props = {
  children: any;
  /**
   * Navbar logo
   */
  logo?: Element | string;
  /** 
   * External CSS class name 
   * */
  className?: string;
  /**
   * Inline CSS
   */
  style?: CSSProperties;
};

const Navbar = ({ children, logo, className = '', style = {} }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <NavbarContainer className={className} style={style} open={open} onClick={toggleOpen}>
      <MenuWithLogo logo={logo}>{children}</MenuWithLogo>
      <Arrow open={open} section="navbar" />
    </NavbarContainer>
  );
};

Navbar.MenuItem = MenuItem;

export default Navbar;
