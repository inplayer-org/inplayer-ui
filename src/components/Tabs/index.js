// @flow
import React from 'react';
import Tab from './Tab';
import TabsWrapper from './TabsWrapper';

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

const Tabs = ({ tabs, selectedTabIndex, onTabClick, className }: Props) =>
  tabs ? (
    <TabsWrapper className={className}>
      {renderTabs(tabs, selectedTabIndex, onTabClick)}
    </TabsWrapper>
  ) : null;

Tabs.defaultProps = {
  className: '',
};

export default Tabs;
