import { ComponentData } from "../types";

const usage = `
  import { UserMenu } from 'inplayer-ui';

  function Page(props) {
    return (
      <UserMenu
        image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
        menuItems={[{ title: 'Hello' }]}
      />
    );
  }
`;

const standardMenu = `<UserMenu
  image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
  menuTitle="User name"
  menuItems={[{ title: 'Hello' }]}
/>
`;

const specialActionItem = `<UserMenu
  image="https://www.impaact4tb.org/wp-content/uploads/2018/07/Generic-male-icon.png"
  menuTitle='User name'
  menuItems={[{ title: 'Hello' }, { title: 'World' }]}
  actionItem={{ title: 'Logout' }}
/>
`;

const UserMenu: ComponentData = {
  description: `
    The UserMenu is a component which renders an overlay dropdown and is used for rendering a profile image, user name and user-related links.
  `,
  path: 'src/components/UserMenu/index.js',
  usage,
  examples: [
    {
      title: 'Standard Menu',
      code: standardMenu,
    },
    {
      title: 'With special action item at bottom',
      code: specialActionItem,
    },
  ],
  propsAndMethods: [
    { name: 'image', type: 'union', default: 'Required' },
    { name: 'className', type: 'string' },
    { name: 'menuTitle', type: 'string' },
    { name: 'style', type: 'Object', default: '{ }'},
  ],
}

export default UserMenu;