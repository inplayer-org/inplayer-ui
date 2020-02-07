import { ComponentData } from "../types";

const usage = `
  import React from 'react';
  import { StepWizard } from '@inplayer-org/inplayer-ui';

  function StepOne() {
    return (
      <div>
        <Typography variant="h2">Step One!</Typography>
      </div>
    );
  };

  function StepTwo() {
    return (
      <div>
        <Typography variant="h2">Step Two!</Typography>
      </div>
    );
  };

  function StepThree() {
    return (
      <div>
        <Typography variant="h2">Step Three!</Typography>
      </div>
    );
  };

  function StepFour() {
    return (
      <div>
        <Typography variant="h2">Step Four!</Typography>
      </div>
    );
  };

  const steps = [
    { isDisabled: false, isCompleted: true, component: <StepOne/> },
    { isDisabled: false, isCompleted: false, component: <StepTwo/> },
    { isDisabled: true, isCompleted: false, component: <StepThree/> },
    { isDisabled: true, isCompleted: false, component: <StepFour/> },
  ];

  class StepWizardExample extends React.Component {
    constructor() {
      super();

      this.state = {
        activeStep: 0,
      };

      this.onStepChange = this.onStepChange.bind(this);
    }

    onStepChange(activeStep) {
      this.setState({ activeStep });
    }

    render() {
      const { activeStep } = this.state;

      return (
        <StepWizard activeStep={activeStep} onStepChange={onStepChange} steps={steps} />
      );
    }
  }
`

const demoCode = `
  class StepWizardExample extends React.Component {
    constructor() {
      super();

      this.state = {
        activeStep: 0,
        steps: [
          { isDisabled: false, isCompleted: true, 
            component:<Typography variant="h2">Step One!</Typography> },
          { isDisabled: false, isCompleted: false,
            component: <Typography variant="h2">Step Two!</Typography> },
          { isDisabled: true, isCompleted: false, 
            component: <Typography variant="h2">Step Three!</Typography> },
          { isDisabled: true, isCompleted: false,
            component: <Typography variant="h2">Step Four!</Typography> },
        ]
      };

      this.onStepChange = this.onStepChange.bind(this);
    }

    onStepChange(activeStep) {
      this.setState({ activeStep });
    }

    render() {
      const { activeStep } = this.state;

      return (
        <StepWizard activeStep={activeStep} onStepChange={this.onStepChange} steps={this.state.steps} />
      );
    }
  }
`

const StepWizard: ComponentData = {
  description: `A software wizard or setup assistant is a user interface type that presents a user with a sequence of dialog boxes that lead the user through a series of well-defined steps. Tasks that are complex, infrequently performed, or unfamiliar may be easier to perform using a wizard.`,
  path: `src/components/StepWizard/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'activeStep', type:'number', default: 'Required' },
    { name: 'steps', type:'Array<StepItem>', default: 'Required' },
    { name: 'className', type:'string' },
    { name: 'icon', type:'union' },
    { name: 'iconModifiers', type:'Array<string>' },
    { name: 'iconPosition', type:'string' },
    { name: 'size', type:'enum', default: 'md', description: 'One of: xs, sm, md, lg' },
    { name: 'style', type:'Object', default: '{}' },
  ]
}



export default StepWizard;