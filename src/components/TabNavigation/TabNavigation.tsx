import React from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import { ifProp } from 'styled-tools';

const Tab = styled.a<{ active: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.palette.text.light};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.font.weights.light}
  line-height: 2rem;
  margin-right: 1rem;
  padding: 0 0.25rem;
  text-decoration: none;
  transition: color 0.3s ease;
  ${ifProp(
    'active',
    css`
      border-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.text.main};
    `
  )};

  &:hover {
    color: ${({ theme }) => theme.palette.text.main};
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

type Props = {
  /**
   * Navigation tabs
   */
  tabs: Array<NavigationTab>;
  /**
   * Function which takes as an argument the index of the selected tab
   */
  onTabClick: (index: number) => void;
  /**
   * Selected tab index
   */
  selectedTabIndex: number;
  /**
   * External CSS class name
   */
  className?: string;
  /**
   * Inline CSS
   */
  style?: CSSProperties;
};

export type TabNavigationProps = Props;

const TabNavigation = ({
  tabs,
  onTabClick,
  selectedTabIndex,
  className = '',
  style = {},
}: Props) => (
  <TabContainer className={className} style={style}>
    {tabs.map((tab, index) => (
      <Tab key={tab.title} onClick={() => onTabClick(index)} active={selectedTabIndex === index}>
        {tab.title}
      </Tab>
    ))}
  </TabContainer>
);

export default TabNavigation;
