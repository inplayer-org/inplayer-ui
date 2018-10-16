import _map from 'lodash/map';

import { Tab } from '../../elements/TabElements/Tab';
import { TabSwitchContainer } from '../../elements/TabElements/TabSwitchContainer';

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

const TabSwitcher = ({ tabs, selectedTabIndex, onTabClick }) =>
  tabs ? (
    <TabSwitchContainer>{renderTabs(tabs, selectedTabIndex, onTabClick)}</TabSwitchContainer>
  ) : null;

export default TabSwitcher;
