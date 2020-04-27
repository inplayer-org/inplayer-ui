import React, { SyntheticEvent, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import colors from 'theme/colors';

const MenuItemContainer = styled.div<{ active: any }>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${transparentize(0.4, colors.white)};
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  font-size:${({ theme }) => theme.font.sizes.small};
  box-sizing: border-box;
  ${ifProp(
    'active',
    css`
      background: ${colors.navy};
      border-right: ${colors.skyBlue} 3px solid;
      color: ${colors.white};
    `
  )};

  &:hover {
    color: ${colors.white};
  }
`;

const MenuItemIcon = styled.i`
  margin: 0 1rem;
  width: 20px;
  min-width: 20px;
`;

type MenuItemProps = {
  active?: boolean;
  icon?: ReactNode;
  onClick?: (e: SyntheticEvent<HTMLDivElement>) => any;
  children?: any;
};

const MenuItem = ({ active, icon, onClick, children }: MenuItemProps) => {
  const onItemClick = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    e.stopPropagation();
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };
  return (
    <MenuItemContainer active={active} onClick={onItemClick}>
      <MenuItemIcon>{icon}</MenuItemIcon>
      {children}
    </MenuItemContainer>
  );
};

export default MenuItem;
