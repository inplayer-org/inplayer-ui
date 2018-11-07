Accordion or expansion panel is a component that generates Accordion component with more accordion panels. It takes `panels` - array of objects and each object should contain:
<br/>- `label` (title)
<br/>- `icon` (icon displayed next to the title)
<br/>- `content` (details represented inside the panel)
<br/>- `accordionAction` (action that should be called on button click)
<br/> - `renderContent` (action used to render the content)

```jsx static
const panels = [
  {
    label: 'Accordion1',
    icon: 'info-circle',
    renderContent: () => {
      return <h1>Content for the accordion1</h1>;
    },
    footerLink: 'Close without saving',
    buttonText: 'Save',
    accordionAction: () => {
      console.log('accordionAction');
    },
  },
  {
    label: 'Accordion2',
    icon: 'info-circle',
    renderContent: () => {
      return <h5>Content for the accordionh2</h5>;
    },
    footerLink: 'Close',
    buttonText: 'Delete',
    accordionAction: () => {
      console.log('accordionAction2');
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
    renderContent: () => {
      return <h1>Content for the accordion1</h1>;
    },
    footerLink: 'Close without saving',
    buttonText: 'Save',
    accordionAction: () => {
      console.log('accordionAction');
    },
  },
  {
    label: 'Accordion2',
    icon: 'info-circle',
    renderContent: () => {
      return <h5>Content for the accordionh2</h5>;
    },
    footerLink: 'Close',
    buttonText: 'Delete',
    accordionAction: () => {
      console.log('accordionAction2');
    },
  },
];
<Accordion panels={panels} />;
```
