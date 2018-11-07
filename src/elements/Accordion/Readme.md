Accordion or expansion panel is a component that generates Accordion component with more accordion panels. It takes `panels` - array of objects and each object should contain:
<br/>- `label` (title)
<br/>- `icon` (icon displayed next to the title)
<br/>- `content` (details represented inside the panel)
<br/>- `saveAction` (action that should be called on save button)

```jsx static
const panels = [
  {
    label: 'Accordion1',
    icon: 'info-circle',
    content: 'Some text for the accordion',
    saveAction: () => {
      console.log('saveAction');
    },
  },
  {
    label: 'Accordion2',
    icon: 'info-circle',
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
    icon: 'info-circle',
    content: 'Some text for the accordion',
    saveAction: () => {
      console.log('saveAction2');
    },
  },
  {
    label: 'Accordion2',
    icon: 'info-circle',
    content: 'Other text for this accordion.',
    saveAction: () => {
      console.log('saveAction2');
    },
  },
];
<Accordion panels={panels} />;
```
