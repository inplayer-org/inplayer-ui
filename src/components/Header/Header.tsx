// @flow
import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { prop } from 'styled-tools';
import colors from 'theme/colors';
import { fontWeights } from 'utils';

// Components
import UserMenu, { UserMenuProps } from 'components/UserMenu';
import TabNavigation, { TabNavigationProps } from 'components/TabNavigation';

const Container = styled.header`
  align-items: center;
  padding: 0 2%;
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
  color: ${({ theme }) => theme.palette.text.main};
  font-weight: ${fontWeights('light')};
  margin: 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

type HeaderProps = {
  title?: string | null;
  userMenuProps?: UserMenuProps | null;
  additionalUserMenuProps?: UserMenuProps | null;
  tabNavigationProps?: TabNavigationProps | null;
  className?: string;
  style?: CSSProperties;
};

const Header = ({
  title = null,
  userMenuProps = null,
  additionalUserMenuProps = null,
  tabNavigationProps = null,
  className = '',
  style = {},
}: HeaderProps) => (
  <Container className={className} style={style}>
    {title && <Title>{title}</Title>}
    {tabNavigationProps && <TabNavigation {...tabNavigationProps} />}
    <MenuWrapper>
      {additionalUserMenuProps && <UserMenu {...additionalUserMenuProps} />}
      {userMenuProps && <UserMenu {...userMenuProps} />}
    </MenuWrapper>
  </Container>
);

export default Header;
