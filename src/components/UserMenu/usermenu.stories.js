// @flow
import React from 'react';
import styled from 'styled-components';

// components
import UserMenu from './index';
import Typography from '../../elements/Typography/index';

export default {
  component: UserMenu,
  title: 'UserMenu',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;
const UserMenuContainer = styled.div`
  align-self: center;
  border: solid 1px #ddd;
  padding: 10px;
  margin-top: 2%;
`;

export const standardMenu = () => (
  <Container>
    <Typography variant="h1" color="black">
      User Menu
    </Typography>
    <Typography variant="p" description>
      The UserMenu is a component which renders an overlay dropdown and is used for rendering a
      profile image, user name and user-related links.
    </Typography>
    <UserMenuContainer>
      <UserMenu
        image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
        menuTitle="User name"
        menuItems={[{ title: 'Hello' }]}
      />
    </UserMenuContainer>
  </Container>
);

export const withSpecialActionItem = () => (
  <Container>
    <Typography variant="h1" color="black">
      User Menu
    </Typography>
    <Typography variant="p" description>
      The UserMenu is a component which renders an overlay dropdown and is used for rendering a
      profile image, user name and user-related links.
    </Typography>
    <UserMenuContainer>
      <UserMenu
        image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
        menuTitle="User name"
        menuItems={[{ title: 'Hello' }, { title: 'World' }]}
        actionItem={{ title: 'Logout' }}
      />
    </UserMenuContainer>
  </Container>
);
