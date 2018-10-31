// @flow
import React from 'react';
import Tab from './Tab';
import TabSwitchContainer from './TabSwitchContainer';

type TabInfo = {
  name: string,
};

type Props = {
  tabs: Array<TabInfo>,
  selectedTabIndex: number,
  onTabClick: (index: number) => void,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
};

const renderTabs = (
  tabs: Array<TabInfo>,
  selectedTabIndex: number,
  onTabClick: (index: number) => void
) =>
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

const TabSwitcher = ({ tabs, selectedTabIndex, onTabClick, className }: Props) =>
  tabs ? (
    <TabSwitchContainer className={className}>
      {renderTabs(tabs, selectedTabIndex, onTabClick)}
    </TabSwitchContainer>
  ) : null;

TabSwitcher.defaultProps = {
  className: '',
};

export default TabSwitcher;
