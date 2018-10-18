// @flow
// import React from 'react';
import Tab from './Tab';
import TabSwitchContainer from './TabSwitchContainer';

type Props = {
  tabs: Object,
  selectedTabIndex: number,
  onTabClick: (index: number) => void,
};

const renderTabs = (tabs, selectedTabIndex, onTabClick) =>
  tabs.map(({ name }, index) => (
    <Tab
      selected={selectedTabIndex === index}
      key={name}
      onClick={() => {
        if (onTabClick) {
          onTabClick(index);
        }
      }}
    >
      {name}
    </Tab>
  ));

const TabSwitcher = ({ tabs, selectedTabIndex, onTabClick }: Props) =>
  tabs ? (
    <TabSwitchContainer>{renderTabs(tabs, selectedTabIndex, onTabClick)}</TabSwitchContainer>
  ) : null;

export default TabSwitcher;
