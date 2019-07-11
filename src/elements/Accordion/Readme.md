Accordion or expansion panel is a component that generates Accordion component with more accordion panels. It takes `panels` - array of objects and each object should contain:
<br/>- `label` (title)
<br/>- `icon` (icon displayed next to the title)
<br/>- `renderActionButton` (save/submit action buttn)
<br/> - `renderContent` (action used to render the content)

and `contentHeight` - that determines the height of the wrapper.

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
    renderActionButton: ({ closeAccordion }) => {
      closeAccordion();
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
    renderActionButton: ({ closeAccordion }) => {
      closeAccordion();
      console.log('accordionAction2');
    },
  },
];
<Accordion panels={panels} contentHeight="46vh" />;
```

### Demo

```jsx
const panels = [
  {
    label: 'Accordion1',
    icon: 'info-circle',
    renderContent: () => {
      return(
      <div>
        <h1>Long Content for the accordion1</h1>
        <h1>Long Content for the accordion1</h1>
        <h1>Long Content for the accordion1</h1>
        <h1>Long Content for the accordion1</h1>
        <h1>Long Content for the accordion1</h1>
        <h1>Long Content for the accordion1</h1>
      </div>);
    },
    renderActionButton: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} size="sm" buttonModifiers={['buttonPrimary']}>
          Save
        </Button>
      )
    }
  },
  {
    label: 'Accordion2',
    icon: 'info-circle',
    renderContent: () => {
      return <h5>Content for the accordionh2</h5>;
    },
    renderActionButton: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} size="sm" buttonModifiers={['buttonPrimary']}>
          Save
        </Button>
      )
    }
  },
];

<Accordion panels={panels} contentHeight="46vh" />;
```
