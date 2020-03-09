import React from 'react';
import Avatar from './index';

export default {
  component: Avatar,
  title: 'Avatar',
};

export const addImage = () => (
  <Avatar imageUrl="https://assets.inplayer.com/images/merchant-default-avatar.png" alt="avatar" />
);
