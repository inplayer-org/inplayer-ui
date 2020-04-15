import React, { useState } from 'react';
import { CSSProperties } from 'styled-components';
import UserMenuDropdown, { UserMenuDropdownProps } from './UserMenuDropdown';
import {
  CloseLayer,
  MenuArrow,
  MenuButton,
  MenuTitle,
  ProfileImage,
  UserMenuContainer,
} from './styles';

export type UserMenuProps = UserMenuDropdownProps & {
  image?: string;
  className?: string;
  style?: CSSProperties;
  menuTitle?: string;
};

const defaultImage = 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png';

const UserMenu = ({
  image = defaultImage,
  menuItems,
  actionItem,
  className,
  style,
  menuTitle,
}: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UserMenuContainer className={className} style={style} onClick={() => setOpen(!open)}>
        {image && <ProfileImage src={image} />}
        <MenuTitle>{menuTitle}</MenuTitle>
        <MenuButton>
          <MenuArrow open={open} />
        </MenuButton>
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
