import React, { useState } from 'react';
import UserMenuDropdown, { Props as UserMenuDropdownProps } from './UserMenuDropdown';
import {
  CloseLayer,
  MenuArrow,
  MenuButton,
  MenuTitle,
  ProfileImage,
  UserMenuContainer,
  MenuTitleContainer,
} from './styles';

export type Props = UserMenuDropdownProps & {
  image?: string;
  menuTitle?: string;
};

const UserMenu = ({ image, menuItems, actionItem, menuTitle }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UserMenuContainer>
        {image && <ProfileImage src={image} />}
        <MenuTitleContainer onClick={() => setOpen(!open)}>
          <MenuTitle>{menuTitle}</MenuTitle>
          <MenuButton>
            <MenuArrow open={open} />
          </MenuButton>
        </MenuTitleContainer>
        {open && (
          <UserMenuDropdown
            menuItems={menuItems}
            actionItem={actionItem}
            onClick={() => setOpen(!open)}
          />
        )}
      </UserMenuContainer>
      {open && <CloseLayer onClick={() => setOpen(!open)} />}
    </>
  );
};
export default UserMenu;
