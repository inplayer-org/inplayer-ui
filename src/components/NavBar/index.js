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
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
  style?: Object,
};

type State = {
  open: boolean,
};

class Navbar extends Component<Props, State> {
  static MenuItem: Element<typeof MenuItem>;

  state = {
    open: false,
  };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { children, logo, className, style } = this.props;
    const { open } = this.state;
    return (
      <NavbarContainer className={className} style={style} open={open} onClick={this.toggleOpen}>
        <MenuWithLogo logo={logo}>{children}</MenuWithLogo>
        <Arrow open={open} section="navbar" />
      </NavbarContainer>
    );
  }
}

Navbar.defaultProps = {
  className: '',
  style: {},
};

Navbar.MenuItem = MenuItem;

export default Navbar;
