TabSwitcher is a component which generates switching tabs. You can use it directly like this:

```jsx static
import { Tab, TabSwitcher } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <TabSwitcher>{renderTabs()}</TabSwitcher>;
}
```

### Demo

```jsx
const tabs = [
  { name: "Account" },
  { name: "User" },
  { name: "Contact" },
];

<TabSwitcher tabs={tabs} selectedTabIndex={0} onTabClick={(index) => console.log(index)} />
```
