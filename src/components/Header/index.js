// @flow
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import colors from 'config/colors';
import { uiColors, fontWeights } from 'utils';

// Components
import UserMenu, { type UserMenuProps } from 'components/UserMenu';
import TabNavigation, { type TabNavigationProps } from 'components/TabNavigation';

const Container = styled.header`
  align-items: center;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  height: ${prop('height', 50)}px;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  z-index: 3;
`;

const Title = styled.h3`
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};
  margin: 0;
`;

type HeaderProps = {
  title?: string,
  userMenuProps?: UserMenuProps,
  tabNavigationProps?: TabNavigationProps,
  className?: string,
  style?: Object,
};

const Header = ({ title, userMenuProps, tabNavigationProps, className, style }: HeaderProps) => (
  <Container className={className} style={style}>
    {title && <Title>{title}</Title>}
    {tabNavigationProps && <TabNavigation {...tabNavigationProps} />}
    {userMenuProps && <UserMenu {...userMenuProps} />}
  </Container>
);

Header.defaultProps = {
  title: null,
  userMenuProps: null,
  tabNavigationProps: null,
  className: '',
  style: {},
};

export default Header;
