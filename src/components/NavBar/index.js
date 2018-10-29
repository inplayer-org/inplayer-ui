// @flow
import React, { Component, type Node, type Element } from 'react';

// Components
import Arrow from './Arrow';
import { NavbarContainer } from './styled';
import MenuItem from './MenuItem';
import MenuWithLogo from './MenuWithLogo';

type Props = {
  children: Node,
  logo: ?Element<*> | ?string,
};

type State = {
  open: boolean,
};

class Navbar extends Component<Props, State> {
  state = {
    open: false,
  };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { children, logo } = this.props;
    const { open } = this.state;
    return (
      <NavbarContainer open={open} onClick={this.toggleOpen}>
        <MenuWithLogo logo={logo}>{children}</MenuWithLogo>
        <Arrow open={open} />
      </NavbarContainer>
    );
  }
}

Navbar.MenuItem = MenuItem;

export default Navbar;
