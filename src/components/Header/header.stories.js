import React from 'react';
import { Typography, Colors } from 'src/index';
import styled from 'styled-components';
import Header from './index';

export default {
  component: Header,
  title: 'Header',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;
const BoxContainer = styled.div`
  width: 90%;
`;

const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h1" color="black">
      Header
    </HeadlineTypography>
    <Typography variant="p">
      The Header represents a versatile component which can house a title or a TabNavigation, as
      well as a UserMenu and Additional User Menu.
    </Typography>
    <br />
    <HeadlineTypography variant="h5">With all 4 components</HeadlineTypography>
    <BoxContainer>
      <Header
        title="My app title"
        userMenuProps={{
          menuTitle: 'User name',
          image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
          menuItems: [
            { title: 'Hello', onClick: console.log },
            { title: 'World', href: 'http://www.example.com' },
          ],
          actionItem: { title: 'Logout' },
        }}
        additionalUserMenuProps={{
          menuTitle: 'Added menu',
          menuItems: [
            {
              image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
              title: 'Agent1',
              onClick: console.log,
            },
            {
              image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
              title: 'Agent2',
              href: 'http://www.example.com',
            },
          ],
          actionItem: {
            title: 'See more on this link',
            href: 'http://www.example.com',
            smallSize: true,
          },
        }}
        tabNavigationProps={{
          tabs: [
            {
              title: 'Hello',
            },
            {
              title: 'Tabs',
            },
          ],
          selectedTabIndex: 0,
          onTabClick: console.log,
        }}
      />
    </BoxContainer>
    <br />
    <HeadlineTypography variant="h5">With title and user menu</HeadlineTypography>
    <BoxContainer>
      <Header
        title="My app title"
        userMenuProps={{
          image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
          menuItems: [
            { title: 'Hello', onClick: console.log },
            { title: 'World', href: 'http://www.example.com' },
          ],
          actionItem: { title: 'Logout' },
        }}
      />
    </BoxContainer>
    <br />
    <HeadlineTypography variant="h5">With tab navigation and user menu</HeadlineTypography>
    <BoxContainer>
      <Header
        userMenuProps={{
          image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
          menuItems: [
            { title: 'Hello', onClick: console.log },
            { title: 'World', href: 'http://www.example.com' },
          ],
          actionItem: { title: 'Logout' },
        }}
        tabNavigationProps={{
          tabs: [
            {
              title: 'Hello',
            },
            {
              title: 'Tabs',
            },
          ],
          selectedTabIndex: 0,
          onTabClick: console.log,
        }}
      />
    </BoxContainer>
  </Container>
);
