import React, { HTMLAttributes, ReactNode } from 'react';
import Tab from './Tab';
import TabsWrapper from './TabsWrapper';

type TabInfo = {
  name: string;
};

type ContentProps = TabInfo & {
  icon?: ReactElement | null;
  iconPosition?: string;
};

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

const Tabs = ({ tabs, selectedTabIndex, onTabClick, ...rest }: TabsProps) =>
  tabs ? (
    <TabsWrapper {...rest}>{renderTabs(tabs, selectedTabIndex, onTabClick)}</TabsWrapper>
  ) : null;

export default Tabs;
