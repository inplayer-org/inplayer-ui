// @flow
import React from 'react';
import styled from 'styled-components';
import colors from 'config/colors';

const ImageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  padding: 0.5rem;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 140px;
  border: 5px solid ${colors.white};
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.4);
`;

type Props = {
  imageUrl?: string,
};

const Avatar = ({ imageUrl }: Props) => (
  <ImageContainer>
    <StyledImage src={imageUrl} alt="avatar-image" />
  </ImageContainer>
);

Avatar.defaultProps = {
  imageUrl: 'https://assets.inplayer.com/images/merchant-default-avatar.png',
};

export default Avatar;
