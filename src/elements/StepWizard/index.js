// @flow
import React from 'react';
import Nav from './Nav';
import Step from './Step';
import type { StepItem } from './Nav';

type TransitionVariant = 'fadeInLeft' | 'fadeInRight' | 'fadeOutLeft' | 'fadeOutRight';

type Props = {
  steps: Array<StepItem>,
  activeStep: number,
  className?: string,
  style?: Object,
  onStepChange?: (activeStep: number) => void,
  transition?: TransitionVariant,
};

const StepWizard = ({ steps, className, style, activeStep, onStepChange, transition }: Props) => {
  const isInvalidStep = currentStep => currentStep < 0 || currentStep > steps.length;

  const setActiveStep = currentStep => {
    if (activeStep === currentStep) return;
    if (isInvalidStep(currentStep)) {
      console.error(`${currentStep} is an invalid step`);
      return;
    }

    // User callback
    onStepChange(currentStep);
  };

  /** Go to step index */
  const goToStep = step => setActiveStep(step);

  const renderSteps = steps.map((step, i) => {
    const isStepActive = i === activeStep;

    if (isStepActive) {
      return (
        <Step isActive={isStepActive} transition={transition}>
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

StepWizard.defaultProps = {
  className: null,
  style: {},
  transition: 'fadeInRight',
  onStepChange: () => {},
};

export default StepWizard;
