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
      open: {},
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleOpen(name) {
    this.setState({ [name]: true });
  }

  toggleClose(name) {
    this.setState({ [name]: false });
  }

  render() {
    return (
      <React.Fragment>
        <Accordion
          toggleClose={e => {
            e.preventDefault();
            this.toggleClose('accordion1');
          }}
          open={this.state.accordion1}
        >
          <Accordion.AccordionPanel
            toggleOpen={e => {
              e.preventDefault();
              this.toggleOpen('accordion1');
            }}
            open={this.state.accordion1}
          >
            <Accordion.AccordionPanelDetails />
          </Accordion.AccordionPanel>
        </Accordion>

        <Accordion
          toggleClose={e => {
            e.preventDefault();
            this.toggleClose('accordion2');
          }}
          open={this.state.accordion2}
        >
          <Accordion.AccordionPanel
            toggleOpen={e => {
              e.preventDefault();
              this.toggleOpen('accordion2');
            }}
            open={this.state.accordion2}
          >
            <Accordion.AccordionPanelDetails />
          </Accordion.AccordionPanel>
        </Accordion>
      </React.Fragment>
    );
  }
}
<AccordionExample />;
```
