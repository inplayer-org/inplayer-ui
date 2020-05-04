import React, { useState } from 'react';
import TabNavigation from './TabNavigation';

const Usage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <TabNavigation
      tabs={[
        {
          title: 'Hello',
        },
        {
          title: 'Tabs',
        },
      ]}
      selectedTabIndex={selectedTabIndex}
      onTabClick={(index: number) => setSelectedTabIndex(index)}
    />
  );
};

export default Usage;
