The Header represents a versatile component which can house a title or a TabNavigation, as well as a UserMenu.

```jsx static
<Header
  title="My app title"
  userMenuProps={{
    image:
      'https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg',
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

### With all 3 components

```jsx
<Header
  title="My app title"
  userMenuProps={{
    image:
      'https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg',
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

### With title and user menu

```jsx
<Header
  title="My app title"
  userMenuProps={{
    image:
      'https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg',
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
      'https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg',
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
