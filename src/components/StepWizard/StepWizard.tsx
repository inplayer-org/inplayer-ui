import React from 'react';
import Nav, { StepItem } from './Nav';
import Step from './Step';
import { AnalyticsPage, AnalyticsProps } from '../../analytics';

type TransitionVariant = 'fadeInLeft' | 'fadeInRight' | 'fadeOutLeft' | 'fadeOutRight';

type StepWizardProps = {
  steps: Array<StepItem>;
  activeStep: number;
  onStepChange?: (activeStep: number) => void;
  transition?: TransitionVariant;
} & AnalyticsProps;

const StepWizard = ({
  steps,
  activeStep,
  onStepChange = () => {},
  transition = 'fadeInRight',
}: StepWizardProps) => {
  const isInvalidStep = (currentStep: number) => currentStep < 0 || currentStep > steps.length;

  const setActiveStep = (currentStep: number) => {
    if (activeStep === currentStep) return;
    if (isInvalidStep(currentStep)) {
      console.error(`${currentStep} is an invalid step`);
      return;
    }

    onStepChange(currentStep);
  };

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
    <AnalyticsPage tag={steps[activeStep].tag || ''} type="page">
      <Nav steps={steps} activeStep={activeStep} goToStep={goToStep} />
      <div>{renderSteps}</div>
    </AnalyticsPage>
  );
};

export default StepWizard;
