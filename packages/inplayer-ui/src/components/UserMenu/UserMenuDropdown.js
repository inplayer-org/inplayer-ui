// @flow
import React from 'packages/inplayer-ui/src/components/UserMenu/react';
import styled, { css } from 'styled-components';
import { ifProp } from 'packages/inplayer-ui/src/components/UserMenu/styled-tools';
import { transparentize } from 'packages/inplayer-ui/src/components/UserMenu/polished';
import { uiColors, fontWeights, fontSizes } from 'packages/inplayer-ui/src/components/UserMenu/utils';
import colors from 'packages/inplayer-ui/src/config/colors';

const Container = styled.div`
  align-items: flex-start;
  box-shadow: 0 1px 5px 0 ${transparentize(0.8, '#000')};
  z-index: 1000;
  min-width: 100%;
  background: ${colors.white};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.125rem 0;
  position: absolute;
  right: 1%;
  top: 40px;

  &::before {
    content: '';
    display: block;
    box-shadow: -1px -1px 1px 0 ${transparentize(0.9, '#000')};
    background: ${colors.white};
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    position: absolute;
    top: -5px;
    right: 11px;
  }
`;

const Item = styled.a`
  color: ${uiColors('text.light')};
  box-sizing: border-box;
  font-weight: ${fontWeights('light')};
  letter-spacing: 0.02em;
  line-height: 2;
  padding: 0.375rem 0.625rem;
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;
  width: 100%;
  font-size: ${fontSizes('medium')};

  &:hover {
    color: ${uiColors('text.main')};
  }
`;

const ActionItem = styled(Item)`
  border-top: 1px solid ${uiColors('text.disabled')};
  margin-top: 0.75rem;
  padding-top: 1.125rem;
  ${ifProp(
    'smallSize',
    css`
      font-size: ${fontSizes('small')};
      border-top: none;
    `
  )};
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ItemImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-left: 0.625rem;
`;

type MenuItem = {
  title: string,
  href?: string,
  image?: string,
  onClick?: (e: SyntheticEvent<*>) => any,
  smallSize?: boolean,
};

export type UserMenuDropdownProps = {
  menuItems: Array<MenuItem>,
  actionItem?: MenuItem,
};

const UserMenuDropdown = ({ menuItems, actionItem }: UserMenuDropdownProps) => (
  <Container>
    {menuItems.map((item, i) => (
      <ItemContainer key={i}>
        {item.image && <ItemImage src={item.image} />}
        <Item key={i} href={item.href} onClick={item.onClick}>
          {item.title}
        </Item>
      </ItemContainer>
    ))}
    {actionItem && (
      <ActionItem
        href={actionItem.href}
        onClick={actionItem.onClick}
        smallSize={actionItem.smallSize}
      >
        {actionItem.title}
      </ActionItem>
    )}
  </Container>
);

UserMenuDropdown.defaultProps = {
  actionItem: null,
};

export default UserMenuDropdown;
