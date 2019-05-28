A software wizard or setup assistant is a user interface type that presents a user with a sequence of dialog boxes that lead the user through a series of well-defined steps. Tasks that are complex, infrequently performed, or unfamiliar may be easier to perform using a wizard.

```jsx static
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
      <StepWizard activeStep={activeStep} onStepChange={onStepChange}>
        <StepOne isDisabled={false} isCompleted={true} />
        <StepTwo isDisabled={false} />
        <StepThree isDisabled={true} />
        <StepFour isDisabled={true} />
      </StepWizard>
    );
  }
}
```

```jsx
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
       <StepWizard activeStep={activeStep} onStepChange={this.onStepChange} steps={steps} />
    );
  }
}
<StepWizardExample />;
```
