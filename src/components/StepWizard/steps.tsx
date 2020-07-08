import React from 'react';
import Typography from '../Typography';

export const StepOne = () => (
  <div>
    <Typography variant="h2">Step One!</Typography>
  </div>
);

export const StepTwo = () => (
  <div>
    <Typography variant="h2">Step Two!</Typography>
  </div>
);

export const StepThree = () => (
  <div>
    <Typography variant="h2">Step Three!</Typography>
  </div>
);

export const StepFour = () => (
  <div>
    <Typography variant="h2">Step Four!</Typography>
  </div>
);

export const steps = [
  { isDisabled: false, isCompleted: true, component: <StepOne /> },
  { isDisabled: false, isCompleted: false, component: <StepTwo /> },
  { isDisabled: true, isCompleted: false, component: <StepThree /> },
  { isDisabled: true, isCompleted: false, component: <StepFour /> },
];
