/* eslint-disable no-shadow */
import React, { useState } from 'react';
import styled from 'styled-components';
import { StepWizard, Typography } from 'src/index';

export default {
  component: StepWizard,
  title: 'Step Wizard',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

const StepOne = () => (
  <div>
    <Typography variant="h2">Step One</Typography>
  </div>
);
const StepTwo = () => (
  <div>
    <Typography variant="h2">Step Two</Typography>
  </div>
);
const StepThree = () => (
  <div>
    <Typography variant="h2">Step Three</Typography>
  </div>
);
const StepFour = () => (
  <div>
    <Typography variant="h2">Step Four</Typography>
  </div>
);

export const Demo = () => {
  const [activeStep, setActiveStep] = useState(0);

  const onStepChange = (activeStep) => setActiveStep(activeStep);

  const steps = [
    { isDisabled: false, isCompleted: true, component: <StepOne /> },
    { isDisabled: false, isCompleted: false, component: <StepTwo /> },
    { isDisabled: true, isCompleted: false, component: <StepThree /> },
    { isDisabled: true, isCompleted: false, component: <StepFour /> },
  ];

  return (
    <Container>
      <Typography variant="h1" color="black">
        Step Wizard
      </Typography>
      <Typography variant="p" description>
        A software wizard or setup assistant is a user interface type that presents a user with a
        sequence of dialog boxes that lead the user through a series of well-defined steps. Tasks
        that are complex, infrequently performed, or unfamiliar may be easier to perform using a
        wizard.
        <br />
        <br />
        <b>Step three and four are disabled.</b>
      </Typography>

      <StepWizard activeStep={activeStep} onStepChange={onStepChange} steps={steps} />
    </Container>
  );
};
