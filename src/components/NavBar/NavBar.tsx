import React, { ReactNode, useState } from 'react';

// Components
import Arrow from './Arrow';
import { NavbarContainer } from './styled';
import MenuItem from './MenuItem';
import MenuWithLogo from './MenuWithLogo';

interface Props {
  children: ReactNode;
  logo?: Element | string;
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string;
  style?: Record<string, any>;
}

const Navbar = ({ children, logo, className, style }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <NavbarContainer className={className} style={style} open={open} onClick={toggleOpen}>
      <MenuWithLogo logo={logo}>{children}</MenuWithLogo>
      <Arrow open={open} section="navbar" />
    </NavbarContainer>
  );
};

Navbar.defaultProps = {
  className: '',
  style: {},
  open: false,
};

Navbar.MenuItem = MenuItem;

export default Navbar;
