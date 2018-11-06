Accordion is a component used in creating asset.

```jsx static
import { Accordion } from '@inplayer-org/inplayer-ui';
import { Typography } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Accordion>label</Accordion>;
}
```

### Demo

```jsx
class AccordionExample extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleOpen() {
    this.setState({ open: true });
  }

  toggleClose() {
    this.setState({ open: false });
  }
}
<Accordion toggleClose={this.toggleClose}>
  <Accordion.AccordionPanel togglOpen={this.toggleOpen}>
    <Typography variant="h3">Protected asset</Typography>
    <Icon name="info-circle" />
  </Accordion.AccordionPanel>
  <Accordion.AccordionPanelDetails>Content</Accordion.AccordionPanelDetails>
</Accordion>;
```
