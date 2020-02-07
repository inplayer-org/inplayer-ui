import { ComponentData } from "../types";

const usage = `
  import { TabNavigation } from 'inplayer-ui';

  class TabExample extends React.Component {
    constructor() {
      super();

      this.state = {
        selectedTabIndex: 0,
      };

      this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(index) {
      this.setState({
        selectedTabIndex: index,
      });
    }

    render() {
      const { selectedTabIndex } = this.state;
      return (
        <TabNavigation
          tabs={[
            {
              title: 'Hello',
            },
            {
              title: 'Tabs',
            },
          ]}
          selectedTabIndex={selectedTabIndex}
          onTabClick={this.onTabClick}
        />
      );
    }
  }
`;

const demoCode = `
  class TabExample extends React.Component {
    constructor() {
      super();

      this.state = {
        selectedTabIndex: 0,
      };

      this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(index) {
      this.setState({
        selectedTabIndex: index,
      });
    }

    render() {
      const { selectedTabIndex } = this.state;
      return (
        <TabNavigation
          tabs={[
            {
              title: 'Hello',
            },
            {
              title: 'Tabs',
            },
          ]}
          selectedTabIndex={selectedTabIndex}
          onTabClick={this.onTabClick}
        />
      );
    }
  }
`;

const TabNavigation: ComponentData = {
  description: `
    The TabNavigation is recommended for usage as a secondary navigation, the primary one being the Navbar.
  `,
  path: 'src/components/TabNavigation/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'onTabClick', type: 'function', default: 'Required' },
    { name: 'selectedTabIndex', type: 'number', default: 'Required' },
    { name: 'tabs', type: 'Array<NavigationTab>', default: 'Required' },
    { name: 'className', type: 'string' },
    { name: 'style', type: 'Object', default: '{ }' },
  ],
}

export default TabNavigation;