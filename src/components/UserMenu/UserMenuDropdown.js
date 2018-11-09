// @flow
import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { uiColors, fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';

const Container = styled.div`
  align-items: flex-start;
  box-shadow: 0 1px 5px 0 ${transparentize(0.8, '#000')};
  z-index: 1000;
  min-width: 200%;
  background: ${colors.white};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 0;
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
  padding: 6px 22px;
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
  margin-top: 12px;
  padding-top: 18px;
`;

type MenuItem = {
  title: string,
  href?: string,
  onClick?: (e: SyntheticEvent<*>) => any,
};

export type UserMenuDropdownProps = {
  menuItems: Array<MenuItem>,
  actionItem?: MenuItem,
};

const UserMenuDropdown = ({ menuItems, actionItem }: UserMenuDropdownProps) => (
  <Container>
    {menuItems.map(item => (
      <Item key={item.title} href={item.href} onClick={item.onClick}>
        {item.title}
      </Item>
    ))}
    {actionItem && (
      <ActionItem href={actionItem.href} onClick={actionItem.onClick}>
        {actionItem.title}
      </ActionItem>
    )}
  </Container>
);

UserMenuDropdown.defaultProps = {
  actionItem: null,
};

export default UserMenuDropdown;
