import React, { useState } from 'react';
import { Typography } from 'elements';
import StepWizard from './StepWizard';

const StepOne = () => (
  <div>
    <Typography variant="h2">Step One!</Typography>
  </div>
);

const StepTwo = () => (
  <div>
    <Typography variant="h2">Step Two!</Typography>
  </div>
);

const StepThree = () => (
  <div>
    <Typography variant="h2">Step Three!</Typography>
  </div>
);

const StepFour = () => (
  <div>
    <Typography variant="h2">Step Four!</Typography>
  </div>
);

const steps = [
  { isDisabled: false, isCompleted: true, component: <StepOne /> },
  { isDisabled: false, isCompleted: false, component: <StepTwo /> },
  { isDisabled: true, isCompleted: false, component: <StepThree /> },
  { isDisabled: true, isCompleted: false, component: <StepFour /> },
];

const Usage = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <StepWizard steps={steps} activeStep={activeStep} onStepChange={step => setActiveStep(step)} />
  );
};

export default Usage;
