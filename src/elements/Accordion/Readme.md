Accordion or expansion panel is a component that generates Accordion component with more accordion panels. It takes `panels` - array of objects and each object should contain:
<br/>- `label` (title)
<br/>- `icon` (icon displayed next to the title)
<br/>- `renderActionButton` (save/submit action buttn)
<br/>- `renderFooterLink` (close action buttn)
<br/> - `renderContent` (action used to render the content)
<br/> - `contentHeight` - that determines the height of the wrapper.
<br/> - `isExtendable` (display arrow and allow the accordion to extend)
<br/> - `iconTooltip` (optional parameter - a tooltip to display on hovering the icon, see `Tooltip`'s prop list) - default `null`
<br/> - `width` (optional parameter - sets the width for the Accordion wrapper) - default 100%
<br/> - `extendWidth` (optional parameter - defines the width the accordion should extend) - default 20%
<br/> - `disabled` (optional paremeter - a boolean to disable clicking or opening the panel) - default `false`

```jsx static
const panels = [
  {
    label: 'Accordion1',
    icon: 'info-circle',
    renderContent: () => {
      return <h1>Content for the accordion1</h1>;
    },
    renderActionButton: ({ closeAccordion }) => {
      closeAccordion();
      console.log('accordionAction');
    },
    renderFooterLink: ({ closeAccordion }) => {
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
    renderActionButton: ({ closeAccordion }) => {
      closeAccordion();
      console.log('accordionAction2');
    },
    renderFooterLink: ({ closeAccordion }) => {
      closeAccordion();
      console.log('accordionAction');
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
    },
    renderFooterLink: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} style={{border: 'none', background: 'transparent'}} size="sm">
          Cancel
        </Button>
      )
    },
  },
  {
    label: 'Accordion2',
    icon: 'info-circle',
    iconTooltip: {
      content: 'This is a disabled panel with optional icon with a tooltip',
      placement: 'left',
    },
    renderContent: () => {
      return <h5>Content for the accordionh2</h5>;
    },
    renderActionButton: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} size="sm" buttonModifiers={['buttonPrimary']}>
          Save
        </Button>
      )
    },
     renderFooterLink: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} style={{border: 'none', background: 'transparent'}} size="sm">
          Cancel
        </Button>
      )
    },
    disabled: true,
  },
  {
    label: 'Accordion3',
    renderContent: () => {
      return <h5>Content for the accordionh3</h5>;
    },
    renderActionButton: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} size="sm" buttonModifiers={['buttonPrimary']}>
          Save
        </Button>
      )
    },
     renderFooterLink: ({ closeAccordion }) => {
      return (
        <Button onClick={closeAccordion} style={{border: 'none', background: 'transparent'}} size="sm">
          Cancel
        </Button>
      )
    },
  },
];

<Accordion panels={panels} contentHeight="46vh" isExtendable width="80%" extendWidth="20%" />;
```
