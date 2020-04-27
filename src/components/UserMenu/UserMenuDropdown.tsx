import React, { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import { fontWeights, fontSizes } from 'utils';
import colors from 'theme/colors';

const Container = styled.div`
  align-items: flex-start;
  box-shadow: 0 1px 5px 0 ${transparentize(0.8, '#000')};
  z-index: 1000;
  min-width: 98%;
  background: ${colors.white};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.125rem 0;
  position: absolute;
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
  color: ${({ theme }) => theme.palette.text.light};
  box-sizing: border-box;
  font-weight: ${fontWeights('light')};
  letter-spacing: 0.02em;
  line-height: 2;
  padding: 0.375rem 0.625rem;
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;
  width: 100%;
  font-size:${({ theme }) => theme.font.sizes.medium};

  &:hover {
    color: ${({ theme }) => theme.palette.text.main};
  }
`;

const ActionItem = styled(Item)<{
  moreThanOneItem: boolean;
  smallSize?: boolean;
}>`
  ${({ moreThanOneItem }) =>
    moreThanOneItem
      ? `border-top: 1px solid ${colors.fontLightGray};
                  margin-top: 0.75rem;
                  padding-top: 1.125rem;`
      : null};
  ${ifProp(
    'smallSize',
    css`
      font-size:${({ theme }) => theme.font.sizes.small};
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
  title: string;
  href?: string;
  image?: string;
  onClick?: (e: SyntheticEvent) => any;
  smallSize?: boolean;
};

export type UserMenuDropdownProps = {
  menuItems?: Array<MenuItem>;
  actionItem?: MenuItem | null;
  onClick?: any;
};

const UserMenuDropdown = ({ menuItems = [], actionItem = null }: UserMenuDropdownProps) => (
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
        moreThanOneItem={menuItems.length > 0}
        href={actionItem.href}
        onClick={actionItem.onClick}
        smallSize={actionItem.smallSize}
      >
        {actionItem.title}
      </ActionItem>
    )}
  </Container>
);

export default UserMenuDropdown;
