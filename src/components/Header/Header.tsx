import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import colors from '../../theme/colors';

// Components
import UserMenu from '../UserMenu';
import { Props as UserMenuProps } from '../UserMenu/UserMenu';
import TabNavigation from '../TabNavigation';
import { Props as TabNavigationProps } from '../TabNavigation/TabNavigation';

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
  font-weight: ${({ theme }) => theme.font.weights.light};
  margin: 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  /**
   * Header title
   */
  title?: string | null;
  /**
   * User menu item properties: `image`, `menuTitle`, `menuItems`, `actionItem` and `onClick`
   */
  userMenuProps?: UserMenuProps | null;
  /**
   * Additional user menu
   */
  additionalUserMenuProps?: UserMenuProps | null;
  /**
   * Tab related properties: `tabs`, `onTabClick`, `selectedTabIndex`
   */
  tabNavigationProps?: TabNavigationProps | null;
};

const Header = ({
  title = null,
  userMenuProps = null,
  additionalUserMenuProps = null,
  tabNavigationProps = null,
}: Props) => (
  <Container>
    {title && <Title>{title}</Title>}
    {tabNavigationProps && <TabNavigation {...tabNavigationProps} />}
    <MenuWrapper>
      {additionalUserMenuProps && <UserMenu {...additionalUserMenuProps} />}
      {userMenuProps && <UserMenu {...userMenuProps} />}
    </MenuWrapper>
  </Container>
);

export default Header;
