// @flow
import React from 'react';
import Nav, { StepItem } from './Nav';
import Step from './Step';

type TransitionVariant = 'fadeInLeft' | 'fadeInRight' | 'fadeOutLeft' | 'fadeOutRight';

type Props = {
  steps: Array<StepItem>;
  activeStep: number;
  className?: string;
  style?: Record<string, any>;
  onStepChange?: (activeStep: number) => void;
  transition?: TransitionVariant;
};

const StepWizard = ({
  steps,
  activeStep,
  className = '',
  style = {},
  onStepChange = () => {},
  transition = 'fadeInRight',
}: Props) => {
  const isInvalidStep = (currentStep: number) => currentStep < 0 || currentStep > steps.length;

  const setActiveStep = (currentStep: number) => {
    if (activeStep === currentStep) return;
    if (isInvalidStep(currentStep)) {
      console.error(`${currentStep} is an invalid step`);
      return;
    }

    // User callback
    onStepChange(currentStep);
  };

  /** Go to step index */
  const goToStep = (step: number) => setActiveStep(step);

  const renderSteps = steps.map((step, i) => {
    const isStepActive = i === activeStep;

    if (isStepActive) {
      return (
        <Step key={`step-${i}`} isActive={isStepActive} transition={transition}>
          {step.component}
        </Step>
      );
    }

    return null;
  });

  return (
    <div className={className} style={style}>
      <Nav steps={steps} activeStep={activeStep} goToStep={goToStep} />
      <div>{renderSteps}</div>
    </div>
  );
};

export default StepWizard;
