import React from 'react';
import { generateSnapshots } from 'helpers';

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

const StepFour = () => (
  <div>
    <h1 variant="h2">Step Four!</h1>
  </div>
);

const StepWizardComponent = () => (
  <StepWizard>
    <StepOne />
    <StepTwo />
    <StepThree />
    <StepFour />
  </StepWizard>
);

generateSnapshots(StepWizardComponent);
