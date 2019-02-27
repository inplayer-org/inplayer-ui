The Header represents a versatile component which can house a title or a TabNavigation, as well as a UserMenu.

```jsx static
<Header
  title="My app title"
  userName="User name"
  userMenuProps={{
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
      additionalUserMenu: true
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
```

### With all 3 components

```jsx
<Header
  title="My app title"
  userName="User name"
  userMenuProps={{
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
        additionalUserMenu: true
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
```

### With title and user menu

```jsx
<Header
  title="My app title"
  userMenuProps={{
    image:
      'https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png',
    menuItems: [
      { title: 'Hello', onClick: console.log },
      { title: 'World', href: 'http://www.example.com' },
    ],
    actionItem: { title: 'Logout' },
  }}
/>
```

### With tab navigation and user menu

```jsx
<Header
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
```
