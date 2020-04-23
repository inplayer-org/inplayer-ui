import React, { useState } from 'react';
import Header from '.';

const App = () => {
  const [tabSelected, setTabSelected] = useState(0);
  return (
    <Header
      title="My app title"
      userMenuProps={{
        menuTitle: 'User name',
        image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
        menuItems: [
          { title: 'Hello', onClick: console.log },
          { title: 'World', href: 'http://www.example.com' },
        ],
        actionItem: { title: 'Logout' },
      }}
      additionalUserMenuProps={{
        menuTitle: 'Added menu',
        image:
          'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        menuItems: [
          { title: 'Agent1', onClick: console.log },
          { title: 'Agent2', href: 'http://www.example.com' },
        ],
        actionItem: {
          title: 'See more on this link',
          href: 'http://www.example.com',
          smallSize: true,
        },
      }}
      tabNavigationProps={{
        tabs: [
          {
            title: 'Hello',
          },
          {
            title: 'Tabs',
          },
        ],
        selectedTabIndex: tabSelected,
        onTabClick: (index: number) => setTabSelected(index),
      }}
    />
  );
};

export default App;
