import React, { HTMLAttributes, ReactElement } from 'react';
import Tab from './Tab';
import TabsWrapper from './TabsWrapper';
import {
  AnalyticsComponent,
  AnalyticsComponentType,
  AnalyticsEvents,
  AnalyticsProps,
} from '../../analytics';

interface TabInfo extends AnalyticsProps {
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
  } & AnalyticsProps;

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
  tabs.map(({ name, tag = '', ...rest }, index) => (
    <AnalyticsComponent key={name}>
      {({ pages, tracker, merchantId, ip }) => (
        <Tab
          selected={selectedTabIndex === index}
          key={name}
          onClick={() => {
            if (onTabClick) {
              onTabClick(index);
            }
            tracker.track({
              event: AnalyticsEvents.CLICK,
              type: AnalyticsComponentType.TAB,
              tag,
              pages,
              merchantId,
              ip,
            });
          }}
        >
          <Content name={name} {...rest} />
        </Tab>
      )}
    </AnalyticsComponent>
  ));

const Tabs = ({ tabs, selectedTabIndex, onTabClick }: TabsProps) =>
  tabs ? <TabsWrapper>{renderTabs(tabs, selectedTabIndex, onTabClick)}</TabsWrapper> : null;

export default Tabs;
