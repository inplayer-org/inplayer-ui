The UserMenu is a component which renders an overlay dropdown and is used for rendering a profile image, user name and user-related links.

```jsx static
import { UserMenu } from 'inplayer-ui';

function Page(props) {
  return (
    <UserMenu
      image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
      menuItems={[{ title: 'Hello' }]}
    />
  );
}
```

### Standard menu

```jsx
<UserMenu
  image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
  menuItems={menuTitle: 'User name', [{ title: 'Hello' }]}
/>
```

### With special action item at bottom

```jsx
<UserMenu
  image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
  menuItems={menuTitle: 'User name', [{ title: 'Hello' }, { title: 'World' }]}
  actionItem={{ title: 'Logout' }}
/>
```
