The TabNavigation is recommended for usage as a secondary navigation, the primary one being the Navbar.

```jsx static
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
```

### Demo

```jsx
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

<TabExample />;
```
