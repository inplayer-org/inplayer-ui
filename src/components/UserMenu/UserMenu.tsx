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

const defaultImage = 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png';

const UserMenu = ({ image = defaultImage, menuItems, actionItem, menuTitle }: Props) => {
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
