The UserMenu is a component which renders an overlay dropdown and is used for rendering a profile image and user-related links.

```jsx static
import { UserMenu } from 'inplayer-ui';

function Page(props) {
  return (
    <UserMenu
      image="https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg"
      menuItems={[{ title: 'Hello' }]}
    />
  );
}
```

### Standard menu

```jsx
<UserMenu
  image="https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg"
  menuItems={[{ title: 'Hello' }]}
/>
```

### With special action item at bottom

```jsx
<UserMenu
  image="https://visualpharm.com/assets/941/Customer-595b40b75ba036ed117d9d5d.svg"
  menuItems={[{ title: 'Hello' }, { title: 'World' }]}
  actionItem={{ title: 'Logout' }}
/>
```
