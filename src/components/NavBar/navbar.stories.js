import React from 'react';
import styled from 'styled-components';
import { Colors, Typography } from 'src/index';
import Navbar from './index';

export default {
  component: Navbar,
  title: 'NavBar',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;
const BoxContainer = styled.div`
  border: 1px solid ${Colors.darkGray};
  width: 90%;
  padding: 40px;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h1" color="black">
      Navigation Bar
    </HeadlineTypography>
    <Typography variant="p" description>
      The Navbar is a horizontal navigation bar component. It takes an image string or element as
      the logo icon at the top. Menu items are rendered as children of the Navbar using the
      <b> Navbar.MenuItem</b> component. The MenuItem takes an icon as a prop (which can be a
      string, which is added as a className to the icon, for FontAwesome CSS classes for example, or
      an actual React Node), and an <b>active</b> prop, which indicates whether the selected menu
      item is active. <b>onClick</b> is an optional prop which lets you add custom click logic to
      the MenuItem. The MenuItem can in an <b>a</b> or <b>Link</b> from react-router element as
      well, just make sure to clear the text-decoration.
    </Typography>
    <br />
    <BoxContainer>
      <Navbar logo="https://inplayer.com/wp-content/themes/darkwin/pics/brand/android-icon-192x192.png">
        <Navbar.MenuItem icon={<h5>M1</h5>} active>
          Menu item 1
        </Navbar.MenuItem>
        <Navbar.MenuItem icon={<h5>M2</h5>} onClick={() => console.log('Clicked menu item')}>
          Menu item 2
        </Navbar.MenuItem>
        <a
          style={{
            textDecoration: 'none',
          }}
          href="http://www.example.com"
        >
          <Navbar.MenuItem icon={<h5>EX</h5>}>External item</Navbar.MenuItem>
        </a>
      </Navbar>
    </BoxContainer>
  </Container>
);
