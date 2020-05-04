import React, { useState } from 'react';
import { FaUserCircle, FaUserAlt } from 'react-icons/fa';
import Tabs from '.';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      name: 'Account',
      icon: <FaUserCircle />,
      iconModifiers: 'statusColorWarning',
    },
    { name: 'User', icon: <FaUserAlt />, iconPosition: 'right' },
    { name: 'Contact' },
  ];
  return (
    <>
      <Tabs
        name="name"
        tabs={tabs}
        selectedTabIndex={selectedTab}
        onTabClick={(index) => setSelectedTab(index)}
      />
    </>
  );
}

export default App;
