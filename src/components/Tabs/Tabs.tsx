import React, { HTMLAttributes, ReactElement } from 'react';
import Tab from './Tab';
import TabsWrapper from './TabsWrapper';

interface TabInfo {
  name: string;
}

interface ContentProps extends TabInfo {
  icon?: ReactElement | null;
  iconPosition?: string;
}

type TabsProps = HTMLAttributes<HTMLDivElement> &
  ContentProps & {
    tabs: Array<TabInfo>;
    selectedTabIndex: number;
    onTabClick: (index: number) => void;
  };

const Content = ({ icon = null, iconPosition = 'left', name }: ContentProps) =>
  iconPosition === 'right' ? (
    <>
      <span>{name}</span>
      {icon}
    </>
  ) : (
    <>
      {icon}
      <span>{name}</span>
    </>
  );

const renderTabs = (
  tabs: Array<TabInfo>,
  selectedTabIndex: number,
  onTabClick: (index: number) => void
) =>
  tabs.map(({ name, ...rest }, index) => (
    <Tab
      selected={selectedTabIndex === index}
      key={name}
      onClick={() => {
        if (onTabClick) {
          onTabClick(index);
        }
      }}
    >
      <Content name={name} {...rest} />
    </Tab>
  ));

const Tabs = ({ tabs, selectedTabIndex, onTabClick }: TabsProps) =>
  tabs ? <TabsWrapper>{renderTabs(tabs, selectedTabIndex, onTabClick)}</TabsWrapper> : null;

export default Tabs;
