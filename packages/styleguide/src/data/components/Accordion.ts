import { ComponentData } from "../types";

const usage = `
  const panels = [
    {
      label: 'Accordion1',
      icon: 'info-circle',
      renderContent: ({ closePanel }) => {
        return <h1>Content for the accordion1</h1>;
      },
    },
    {
      label: 'Accordion2',
      icon: 'info-circle',
      renderContent: ({ closePanel }) => {
        return <h5>Content for the accordionh2</h5>;
      },
    },
  ];
  <Accordion panels={panels} contentHeight="46vh" />;
`;

const demoCode = `
Page = () => {
  const panels = [
    {
      label: 'Accordion1',
      icon: 'info-circle',
      renderContent: ({ closePanel }) => {
        return (
          <div>
            <h1>Long Content for the accordion1</h1>
            <h1>Long Content for the accordion1</h1>
            <h1>Long Content for the accordion1</h1>
            <h1>Long Content for the accordion1</h1>
            <h1>Long Content for the accordion1</h1>
            <h1>Long Content for the accordion1</h1>
          </div>
        );
      },
    },
    {
      label: 'Accordion2',
      icon: 'info-circle',
      iconTooltip: {
        content: 'This is a disabled panel with optional icon with a tooltip',
        placement: 'left',
      },
      renderContent: ({ closePanel }) => {
        return <h5>Content for the accordionh2</h5>;
      },
      disabled: true,
    },
    {
      label: 'Accordion3',
      renderContent: () => {
        return <h5>Content for the accordionh3</h5>;
      },
    },
  ];
  
  return <Accordion
    onActivePanelChange={index => console.log(index)}
    panels={panels}
    contentHeight="46vh"
    isExtendable
    width="80%"
    extendWidth="20%"
  />;
}
`;

const Accordion: ComponentData = {
  description: `
  Accordion or expansion panel is a component that generates Accordion component with more accordion panels. It takes panels - array of objects and each object should contain: 
  - label (title) 
  - icon (icon displayed next to the title) 
  - renderContent (action used to render the content) 
  - iconTooltip (optional parameter - a tooltip to display on hovering the icon, see Tooltip's prop list) - default null 
  - disabled (optional paremeter - a boolean to disable clicking or opening the panel) - default false 
  
  Other props that the accordion accepts: 
  - isExtendable (display arrow and allow the accordion to extend) 
  - width (optional parameter - sets the width for the Accordion wrapper) - default 100% 
  - extendWidth (optional parameter - defines the width the accordion should extend) - default 20% 
  - contentHeight - that determines the height of the wrapper. 
  - onActivePanelChange - function to be executed when the accordion tab changes
  
      `,
  path: 'src/elements/Accordion/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'contentHeight', type: 'string', default: 'Required' },
    { name: 'panels', type: 'Array<Panel>', default: 'Required' },
    { name: 'extendWidth', type: 'string', default: '20%' },
    { name: 'isExtendable', type: 'boolean', default: 'false' },
    { name: 'onActivePanelChange', type: 'function', default: 'null' },
    { name: 'width', type: 'string', default: '100%'},
  ],
}

export default Accordion;