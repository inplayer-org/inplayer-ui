import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { AnalyticsProps } from '../../analytics';

const Tab = styled.a<{ active: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.palette.text.light};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.font.weights.light};
  line-height: 2rem;
  :not(:last-child) {
    margin-right: 1rem;
  }
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
} & AnalyticsProps;

export type Props = {
  tabs: Array<NavigationTab>;
  onTabClick: (index: number) => void;
  selectedTabIndex: number;
} & AnalyticsProps;

const TabNavigation = ({ tabs, onTabClick, selectedTabIndex }: Props) => (
  <TabContainer>
    {tabs.map((tab, index) => (
      <Tab
        key={tab.title}
        id={tab.title.toLowerCase()}
        onClick={() => onTabClick(index)}
        active={selectedTabIndex === index}
      >
        {tab.title}
      </Tab>
    ))}
  </TabContainer>
);

export default TabNavigation;
