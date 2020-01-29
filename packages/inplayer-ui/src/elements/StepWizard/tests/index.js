import React from 'packages/inplayer-ui/src/elements/StepWizard/tests/react';
import { generateSnapshots } from 'packages/inplayer-ui/src/elements/StepWizard/tests/helpers';

import StepWizard from '../index';

const StepOne = () => (
  <div>
    <h1 variant="h2">Step One!</h1>
  </div>
);

const StepTwo = () => (
  <div>
    <h1 variant="h2">Step Two!</h1>
  </div>
);

const StepThree = () => (
  <div>
    <h1 variant="h2">Step Three!</h1>
  </div>
);

const steps = [
  {
    isDisabled: false,
    isCompleted: false,
    component: <StepOne />,
  },
  {
    isDisabled: true,
    isCompleted: false,
    component: <StepTwo />,
  },
  {
    isDisabled: true,
    isCompleted: false,
    component: <StepThree />,
  },
];

const StepWizardComponent = () => <StepWizard steps={steps} />;

generateSnapshots(StepWizardComponent);
