// @flow
import React, { type Element } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';

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
    background: #f0f3f6;
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
`;

type UserMenuProps = {
  image: Element<*> | string,
};

type UserMenuState = {
  open: boolean,
};

class UserMenu extends React.Component<UserMenuProps, UserMenuState> {
  state = {
    open: false,
  };

  toggleMenuOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { image } = this.props;
    const { open } = this.state;

    return (
      <UserMenuContainer onClick={this.toggleMenuOpen}>
        <ProfileImage src={image} />
        <MenuButton>
          <MenuArrow open={open} />
        </MenuButton>
      </UserMenuContainer>
    );
  }
}

export default UserMenu;
