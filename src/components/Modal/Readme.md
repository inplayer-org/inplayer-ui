```jsx static
import { Modal } from 'inplayer-ui';

class App extends React.Component {
  this.state = {
    isModalOpen: false,
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  render() {
    return (
      <div style={mainStyle.app}>
        <button style={mainStyle.button} onClick={this.openModal}>
          Open modal
        </button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          style={modalStyle}
        >
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium nec nisi pulvinar lacinia. Sed dapibus id dui vel varius.
            Duis erat ligula, posuere nec massa nec, ultricies bibendum velit.
            Nam vehicula lectus a convallis varius. Duis ullamcorper felis ac
            sem pulvinar pretium pellentesque id urna. Aliquam erat volutpat.
            Pellentesque sagittis congue lorem, at ultricies mauris lobortis a.
            Nam dignissim lectus eget tellus eleifend dictum.
          </p>
        </Modal>
      </div>
    );
  }
}
```

### Demo

```jsx
class App extends React.Component {
  // set initial state
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
    };

    // bind functions
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Open modal</Button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          title="Lorem Ipsum"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium nec nisi pulvinar lacinia. Sed dapibus id dui vel varius.
            Duis erat ligula, posuere nec massa nec, ultricies bibendum velit.
            Nam vehicula lectus a convallis varius. Duis ullamcorper felis ac
            sem pulvinar pretium pellentesque id urna. Aliquam erat volutpat.
            Pellentesque sagittis congue lorem, at ultricies mauris lobortis a.
            Nam dignissim lectus eget tellus eleifend dictum.
          </p>
        </Modal>
      </div>
    );
  }
}

<App />;
```
