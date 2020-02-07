import { ComponentData } from "../types";

const usage = `
  import { Note } from 'inplayer-ui';

  function Page(props) {
    return (
      <Note
        type="success"
        title="Done!"
        text="This box indicates a successful or positive action."
      />
    );
  }
`;

const demoCode = `<div>
  <Note
    title="Just so you know!"
    text="This block indicates a neutral informative note."
    icon="info-circle"
  />

  <Note
    type="informative"
    title="Just so you know!"
    text="This is used as a note on white backgrounds to give it a little contrast."
  />

  <Note
    type="success"
    title="Done!"
    text="This box indicates a successful or positive action."
  />

  <Note
    type="warning"
    title="Important note!"
    text="This box indicates a warning that might need attention."
  />

  <Note
    type="danger"
    title="Danger!"
    text="This box indicates a dangerous or potentially negative action."
  />
</div>
`;

const Note: ComponentData = {
  description: `Note is a component for displaying information for notification. 
  The type attribute can be: informative, success, warning, danger. If not of the above is added, the default note with white background will be displayed. 
  The title attribute is the string to be set as title for the notification. 
  The text attribute is the actual notification that needs to be displayed to the user. 
  The icon attribute is a string which represents a FontAwesome icon. It is not considered when there is a type prop passed.`,
  path: 'src/components/Note/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'icon', type: 'string', default: 'Required' },
    { name: 'text', type: 'string', default: 'Required' },
    { name: 'title', type: 'string', default: 'Required' },
    { name: 'type', type: 'enum', default: 'Required', description: 'One of: informative, success, warning, danger' },
    { name: 'className', type: 'string', description: 'A className can be passed down for further styling or extending with CSS-in-JS' },
    { name: 'style', type: 'Object', default: '{ }' },
  ],
}

export default Note;