// @flow
import React, { type Element, Fragment } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';

import UserMenuDropdown, { type UserMenuDropdownProps } from './UserMenuDropdown';

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

const MenuButton = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  display: flex;
  height: 30px;
  justify-content: center;
  min-width: 30px;
  transition: all 0.5s ease;

  &:hover {
    background: ${colors.lightGray};
  }
`;

const MenuArrow = styled.i`
  border: solid ${colors.darkGray};
  border-width: 1px 0 0 1px;
  display: inline-block;
  padding: 4px;
  transform: ${ifProp('open', 'rotate(45deg)', 'rotate(-135deg)')};
  transition: all 0.5s ease;
`;

const UserMenuContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  max-width: 10%;
  position: relative;
`;

const CloseLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export type UserMenuProps = UserMenuDropdownProps & {
  image: Element<*> | string,
  className?: string,
  style?: Object,
};

type UserMenuState = {
  open: boolean,
};

class UserMenu extends React.Component<UserMenuProps, UserMenuState> {
  static defaultProps: {
    className: string,
  };

  state = {
    open: false,
  };

  toggleMenuOpen = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  hide = () => {
    this.setState({ open: false });
  };

  render() {
    const { image, menuItems, actionItem, className, style } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <UserMenuContainer className={className} style={style} onClick={this.toggleMenuOpen}>
          <ProfileImage src={image} />
          <MenuButton>
            <MenuArrow open={open} />
          </MenuButton>
          {open && (
            <UserMenuDropdown
              open={open}
              menuItems={menuItems}
              actionItem={actionItem}
              onClick={this.toggleMenuOpen}
            />
          )}
        </UserMenuContainer>
        {open && <CloseLayer onClick={this.hide} />}
      </Fragment>
    );
  }
}

UserMenu.defaultProps = {
  className: '',
  style: {},
};

export default UserMenu;
