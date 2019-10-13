// @flow
import React from 'react';
import Icon from 'elements/Icon';
import Tab from './Tab';
import TabsWrapper from './TabsWrapper';

type TabInfo = {
  name: string,
};

type ContentProps = {
  icon?: string,
  iconPosition?: string,
  iconModifiers?: Array<string>,
};

type Props = HTMLDivElement &
  ContentProps & {
    tabs: Array<TabInfo>,
    selectedTabIndex: number,
    onTabClick: (index: number) => void,
    /** A className can be passed down for further styling or extending with CSS-in-JS */
    className?: string,
    style?: Object,
  };

const Content = ({ icon, iconPosition, iconModifiers, name }: any) =>
  iconPosition === 'right' ? (
    <>
      {name}
      {icon && <Icon name={icon} modifiers={iconModifiers} />}
    </>
  ) : (
    <>
      {icon && <Icon name={icon} modifiers={iconModifiers} />}
      {name}
    </>
  );

Content.defaultProps = {
  icon: null,
  iconPosition: 'left',
  iconModifiers: [],
};

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
};

export default Tabs;
