import { ComponentData } from "../types";

const usage = `
  import { Tabs } from '@inplayer-org/inplayer-ui';

  function Page(props) {
    return <Tabs>{renderTabs()}</Tabs>;
  }
`;

const demoCode = `Page = () => {
  const tabs = [{ name: 'Account' }, { name: 'User' }, { name: 'Contact' }];

  return <Tabs
    tabs={tabs}
    selectedTabIndex={0}
    onTabClick={index => console.log(index)}
  />;
}
`;

const tabsWithIcon = `Page = () => {
  const tabs = [
    { name: 'Account', icon: 'user-circle', iconModifiers: 'statusColorWarning' },
    { name: 'User', icon: 'user', iconPosition: 'right' },
    { name: 'Contact' }
  ];

  return <Tabs
    tabs={tabs}
    selectedTabIndex={0}
    onTabClick={index => console.log(index)}
  />;
}
`;

const Tabs: ComponentData = {
  description: `
    Tabs is a component which generates switching tabs. You can use it directly like this:
  `,
  path: 'src/components/Tabs/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    },
    {
      title: 'Tabs with Icon',
      code: tabsWithIcon,
    },
  ],
  propsAndMethods: [
    { name: 'onTabClick', type: 'function', default: 'Required' },
    { name: 'selectedTabIndex', type: 'number', default: 'Required' },
    { name: 'tabs', type: 'Array<TabInfo>', default: 'Required' },
    { name: 'className', type: 'string', description: 'A className can be passed down for further styling or extending with CSS-in-JS' },
    { name: 'icon', type: 'string' },
    { name: 'iconModifiers', type: 'Array<string>' },
    { name: 'iconPosition', type: 'string' },
    { name: 'style', type: 'Object', default: '{ }'},
  ],
}

export default Tabs;