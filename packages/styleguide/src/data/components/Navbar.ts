import { ComponentData } from "../types";

const usage = `
  <Navbar 
    logo="https://inplayer.com/wp-content/themes/darkwin/pics/brand/android-icon-192x192.png">
    <Navbar.MenuItem icon={<h1>M1</h1>} active>
        Menu item 1
    </Navbar.MenuItem>
    <Navbar.MenuItem icon={<h1>M2</h1>}>Menu item 2</Navbar.MenuItem>
  </Navbar>
`;

const demoCode = `<Navbar logo="https://inplayer.com/wp-content/themes/darkwin/pics/brand/android-icon-192x192.png">
    <Navbar.MenuItem icon={<h5>M1</h5>} active>
    Menu item 1
    </Navbar.MenuItem>
    <Navbar.MenuItem
    icon={<h5>M2</h5>}
    onClick={() => console.log('Clicked menu item')}
    >
    Menu item 2
    </Navbar.MenuItem>
    <a
    style={{
        textDecoration: 'none',
    }}
    href="http://www.example.com"
    >
    <Navbar.MenuItem icon={<h5>EX</h5>}>External item</Navbar.MenuItem>
    </a>
</Navbar>
`;

const Navbar: ComponentData = {
  description: `The Navbar is a horizontal navigation bar component. It takes an image string or element as the logo icon at the top. Menu items are rendered as children of the Navbar using the Navbar.MenuItem component. The MenuItem takes an icon as a prop (which can be a string, which is added as a className to the icon, for FontAwesome CSS classes for example, or an actual React Node), and an active prop, which indicates whether the selected menu item is active. onClick is an optional prop which lets you add custom click logic to the MenuItem. The MenuItem can in an a or Link from react-router element as well, just make sure to clear the text-decoration.`,
  path: 'src/components/NavBar/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'children', type: 'Node', default: 'Required' },
    { name: 'logo', type: 'union', default: 'Required' },
    { name: 'className', type: 'string', description: 'A className can be passed down for further styling or extending with CSS-in-JS' },
    { name: 'children', type: 'Node', default: 'Required' },
  ],
}

export default Navbar;