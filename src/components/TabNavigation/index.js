// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { uiColors, fontWeights } from 'utils';

const Tab = styled.a`
  border-bottom: 2px solid transparent;
  color: ${uiColors('text.light')};
  cursor: pointer;
  font-weight: ${fontWeights('light')};
  line-height: 2rem;
  margin-right: 1em;
  padding: 0 4px;
  text-decoration: none;
  transition: color 0.3s ease;
  ${ifProp(
    'active',
    css`
      border-color: ${uiColors('primary.main')};
      color: ${uiColors('text.main')};
    `
  )};

  &:hover {
    color: ${uiColors('text.main')};
  }
`;

const TabContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

type NavigationTab = {
  title: string,
};

type Props = {
  tabs: Array<NavigationTab>,
  onTabClick: (index: number) => any,
  selectedTabIndex: number,
  className?: string,
  style?: Object,
};

export type TabNavigationProps = Props;

const TabNavigation = ({ tabs, onTabClick, selectedTabIndex, className, style }: Props) => (
  <TabContainer className={className} style={style}>
    {tabs.map((tab, index) => (
      <Tab key={tab.title} onClick={() => onTabClick(index)} active={selectedTabIndex === index}>
        {tab.title}
      </Tab>
    ))}
  </TabContainer>
);

TabNavigation.defaultProps = {
  className: '',
  style: {},
};

export default TabNavigation;
