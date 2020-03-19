import React from 'react';
import Tab from './Tab';
import TabsWrapper from './TabsWrapper';

type TabInfo = {
  name: string;
};

interface Props {
  tabs: Array<TabInfo>;
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string;
  style?: Record<string, any>;
  icon?: Node | string;
  iconPosition?: string;
}

const Content = ({ icon, iconPosition, name }: any) =>
  iconPosition === 'right' ? (
    <>
      {name}
      {icon}
    </>
  ) : (
    <>
      {icon}
      {name}
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

const Tabs = ({ tabs, selectedTabIndex, onTabClick, className, style }: Props) =>
  tabs ? (
    <TabsWrapper className={className} style={style}>
      {renderTabs(tabs, selectedTabIndex, onTabClick)}
    </TabsWrapper>
  ) : null;

Tabs.defaultProps = {
  className: '',
  style: {},
  icon: null,
  iconPosition: 'left',
};

export default Tabs;
