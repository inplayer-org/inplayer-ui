Note is a component for displaying information for notification. <br />
The `type` attribute can be: informative, transparentInformative, success, warning, danger. <br />
The `title` attribute is the string to be set as title for the notification. <br />
The `text` attribute is the actual notification that needs to be displayed to the user. <br />
The `icon` attribute is string to display the icon from icon fonts: done, info, danger, warning. <br />

You can use it directly like this:

```jsx static
import { Note } from 'inplayer-ui';

function Page(props) {
  return (
    <Note
      type="success"
      title="Done!"
      text="This box indicates a successful or positive action."
      icon="done"
    />
  );
}
```

### Demo

```jsx
<Note
  type="informative"
  title="Just so you know!"
  text="This block indicates a neutral informative note."
  icon="info"
/>

<Note
  type="transparentInformative"
  title="Just so you know!"
  text="This is used as a note on white backgrounds to give it a little contrast."
  icon="info"
/>

<Note
  type="success"
  title="Done!"
  text="This box indicates a successful or positive action."
  icon="done"
/>

<Note
  type="warning"
  title="Important note!"
  text="This box indicates a warning that might need attention."
  icon="info"
/>

<Note
  type="danger"
  title="Danger!"
  text="This box indicates a dangerous or potentially negative action."
  icon="warning"
/>
```
