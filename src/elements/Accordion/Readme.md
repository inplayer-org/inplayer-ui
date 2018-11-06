Accordion is a component used in creating asset.

```jsx static
const panels = [
  {
    label: 'Accordion1',
    icon: '',
    content: 'Some text for the accordion',
    saveAction: () => {
      console.log('saveAction');
    },
  },
  {
    label: 'Accordion2',
    icon: '',
    content: 'Other text for this accordion.',
    saveAction: () => {
      console.log('saveAction2');
    },
  },
];
<Accordion panels={panels} />;
```

### Demo

```jsx
const panels = [
  {
    label: 'Accordion1',
    icon: '',
    content: 'Some text for the accordion',
    saveAction: () => {
      console.log('saveAction');
    },
  },
  {
    label: 'Accordion2',
    icon: '',
    content: 'Other text for this accordion.',
    saveAction: () => {
      console.log('saveAction2');
    },
  },
];
<Accordion panels={panels} />;
```
