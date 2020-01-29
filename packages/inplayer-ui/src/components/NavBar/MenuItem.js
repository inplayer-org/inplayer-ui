// @flow
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import { uiColors, fontSizes } from 'utils';
import colors from 'config/colors';

const MenuItemContainer = styled.div`
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
      background: ${uiColors('primary.dark')};
      border-right: ${uiColors('primary.main')} 3px solid;
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
  active: boolean,
  icon: ?string | ?Node,
  onClick: ?(e: SyntheticEvent<HTMLDivElement>) => any,
  children: ?Node,
};

const MenuItem = ({ active, icon, onClick, children }: MenuItemProps) => {
  const onItemClick = e => {
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
