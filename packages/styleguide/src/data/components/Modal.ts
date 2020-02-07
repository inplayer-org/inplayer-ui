import { ComponentData } from "../types";

const usage = `
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
        <div>
          <button onClick={this.openModal}>
            Open modal
          </button>

          <Modal
            title="Lorem Ipsum"
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
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
`;

const demoCode = `class App extends React.Component {
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
          title="Lorem Ipsum"
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
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
`;

const Modal: ComponentData = {
  path: 'src/components/Modal/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'children', type: 'Node', default: 'Required' },
    { name: 'closeModal', type: 'function', default: 'Required' },
    { name: 'isModalOpen', type: 'boolean', default: 'Required' },
    { name: 'title', type: 'string', default: 'Required' },
    { name: 'className', type: 'string' },
    { name: 'style', type: 'Object', default: '{}' },
  ]
}

export default Modal;