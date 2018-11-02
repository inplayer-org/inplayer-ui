// @flow
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import colors from 'config/colors';
import { uiColors } from 'utils';

const Container = styled.header`
  align-items: center;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  height: ${prop('height', 50)}px;
  justify-content: space-between;
  margin: 0;
  padding: 0 2%;
  width: 100%;
  z-index: 3;
`;

const Title = styled.h3`
  color: ${uiColors('text.main')};
  font-weight: 300;
  margin: 0;
`;

type HeaderProps = {
  title?: string,
};

const Header = ({ title }: HeaderProps) => <Container>{title && <Title>{title}</Title>}</Container>;

Header.defaultProps = {
  title: null,
};

export default Header;
