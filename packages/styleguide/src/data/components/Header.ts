import { ComponentData } from "../types";

const usage = `
  <Header
    title="My app title"
    userMenuProps={{
      menuTitle: 'User name',
      image:
        'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
      menuItems: [
        { title: 'Hello', onClick: console.log },
        { title: 'World', href: 'http://www.example.com' },
      ],
      actionItem: { title: 'Logout' },
    }}
    additionalUserMenuProps={{
      menuTitle: 'Added menu',
      menuItems: [
        { title: 'Agent1', onClick: console.log },
        { title: 'Agent2',  href: 'http://www.example.com' },
      ],
      actionItem: {
        title: 'See more on this link',
        href: 'http://www.example.com',
        smallSize: true
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
      selectedTabIndex: 0,
      onTabClick: console.log,
    }}
  />
`;

const withAllComponentsCode = `<Header
  title="My app title"
  userMenuProps={{
    menuTitle: 'User name',
    image:
      'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
    menuItems: [
      { title: 'Hello', onClick: console.log },
      { title: 'World', href: 'http://www.example.com' },
    ],
    actionItem: { title: 'Logout' },
  }}
  additionalUserMenuProps={{
    menuTitle: 'Added menu',
    menuItems: [
      {
        image: 'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
        title: 'Agent1',
        onClick: console.log
      },
      {
        image:
        'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
        title: 'Agent2',
        href: 'http://www.example.com'
      },
    ],
    actionItem: {
        title: 'See more on this link',
        href: 'http://www.example.com',
        smallSize: true
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
    selectedTabIndex: 0,
    onTabClick: console.log,
  }}
/>
`;

const withTitleAndUserCode = `<Header
  userMenuProps={{
    image:
      'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
    menuItems: [
      { title: 'Hello', onClick: console.log },
      { title: 'World', href: 'http://www.example.com' },
    ],
    actionItem: { title: 'Logout' },
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
    selectedTabIndex: 0,
    onTabClick: console.log,
  }}
/>
`;

const withTabNavigationCode = `<Header
  userMenuProps={{
    image:
      'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
    menuItems: [
      { title: 'Hello', onClick: console.log },
      { title: 'World', href: 'http://www.example.com' },
    ],
    actionItem: { title: 'Logout' },
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
    selectedTabIndex: 0,
    onTabClick: console.log,
  }}
/>
`;
const Header: ComponentData = {
  description: `
    The Header represents a versatile component which can house a title or a TabNavigation, as well as a UserMenu and Additional User Menu.
  `,
  path: 'src/components/Header/index.js',
  usage,
  examples: [
    {
      title: 'With all 4 components',
      code: withAllComponentsCode,
    },
    {
      title: 'With title and user menu',
      code: withTitleAndUserCode,
    },
    {
      title: 'With tab navigation and user menu',
      code: withTabNavigationCode,
    }
  ],
  propsAndMethods: [
    { name: 'additionalUserMenuProps', type: 'UserMenuProps', default: 'null' },
    { name: 'className', type: 'string' },
    { name: 'style', type: 'Object', default: '{ }' },
    { name: 'tabNavigationProps', type: 'TabNavigationProps', default: 'null' },
    { name: 'title', type: 'string', default: 'null' },
    { name: 'userMenuProps', type: 'UserMenuProps', default: 'null' },
  ],
}

export default Header;