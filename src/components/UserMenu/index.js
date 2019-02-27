// @flow
import React, { type Element, Fragment } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';

import { uiColors, fontSizes } from 'utils/index';
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
  border-width: 1px 0;
  display: inline-block;
  padding: 4px;
  transform: ${ifProp('open', 'rotate(45deg)', 'rotate(-135deg)')};
  transition: all 0.5s ease;
`;

const UserMenuContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  max-width: 20%;
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

const MenuTitle = styled.span`
  color: ${uiColors('text.light')};
  transition: color 0.3s ease;
  font-size: ${fontSizes('medium')};
  padding: 0 3px 0 10px;

  &:hover {
    color: ${uiColors('text.main')};
  }
`;

export type UserMenuProps = UserMenuDropdownProps & {
  image: Element<*> | string,
  className?: string,
  style?: Object,
  userName?: string,
  menuTitle?: string,
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

  render() {
    const { image, menuItems, actionItem, className, style, userName, menuTitle } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <UserMenuContainer className={className} style={style} onClick={this.toggleMenuOpen}>
          {image && <ProfileImage src={image} />}
          <MenuTitle>{userName || menuTitle}</MenuTitle>
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
        {open && <CloseLayer onClick={this.toggleMenuOpen} />}
      </Fragment>
    );
  }
}

UserMenu.defaultProps = {
  className: '',
  style: {},
};

export default UserMenu;
