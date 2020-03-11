// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Typography from '../Typography/index';
import Avatar from './index';

export default {
  component: Avatar,
  title: 'Avatar',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const demo = () => (
  <Container>
    <Typography variant="h1" color="black">
      Avatar
    </Typography>
    <Avatar
      imageUrl="https://assets.inplayer.com/images/merchant-default-avatar.png"
      alt="avatar"
    />
  </Container>
);
