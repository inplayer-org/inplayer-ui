// @flow
import _map from 'lodash/map';
import Tab from './Tab';
import TabSwitchContainer from './TabSwitchContainer';

type Props = {
  tabs: Object,
  selectedTabIndex: number,
  onTabClick: (index: number) => void,
};

const renderTabs = (tabs, selectedTabIndex, onTabClick) =>
  _map(tabs, ({ name }, index) => (
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
