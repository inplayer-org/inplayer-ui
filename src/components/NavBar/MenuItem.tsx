// @flow
import React, { ReactNode, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import { fontSizes } from 'utils';
import colors from 'theme/colors';

const MenuItemContainer = styled.div<{ onClick: (e: ChangeEvent<HTMLElement>) => any }>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${transparentize(0.4, colors.white)};
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${fontSizes('small')};
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

interface MenuItemProps {
  active: boolean;
  icon?: string | ReactNode;
  onClick: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) &
    ((e: React.ChangeEvent<HTMLElement>) => any);
  children?: ReactNode;
}

const MenuItem = ({ active, icon, onClick, children }: MenuItemProps) => {
  const onItemClick = (e: ChangeEvent<HTMLElement>) => {
    e.stopPropagation();
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };
  return (
    <MenuItemContainer active={active} onClick={onItemClick}>
      {typeof icon === 'string' ? (
        <MenuItemIcon className={icon} />
      ) : (
        <MenuItemIcon>{icon}</MenuItemIcon>
      )}

      {children}
    </MenuItemContainer>
  );
};

export default MenuItem;
