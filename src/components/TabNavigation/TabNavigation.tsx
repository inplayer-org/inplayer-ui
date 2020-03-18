// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { fontWeights } from 'utils';

const Tab = styled.a<{ active: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${props => props.theme.palette.text.light};
  cursor: pointer;
  font-weight: ${fontWeights('light')};
  line-height: 2rem;
  margin-right: 1rem;
  padding: 0 0.25rem;
  text-decoration: none;
  transition: color 0.3s ease;
  ${ifProp(
    'active',
    css`
      border-color: ${props => props.theme.palette.primary.main};
      color: ${props => props.theme.palette.text.main};
    `
  )};

  &:hover {
    color: ${props => props.theme.palette.text.main};
  }
`;

const TabContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

type NavigationTab = {
  title: string;
};

interface Props {
  tabs: Array<NavigationTab>;
  onTabClick: (index: number) => any;
  selectedTabIndex: number;
  className?: string;
  style?: Record<string, any>;
}

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
