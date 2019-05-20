// @flow
import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Step from './Step';

type TransitionVariant = 'fadeInLeft' | 'fadeInRight' | 'fadeOutLeft' | 'fadeOutRight';

type Props = {
  children: React.ReactNode,
  activeStep: number,
  className?: string,
  style?: Object,
  onStepChange?: (activeStep: number) => void,
  transition?: TransitionVariant,
};

const WizardContainer = styled.div`
  position: relative;
`;

const StepWizard = ({
  children,
  className,
  style,
  activeStep,
  onStepChange,
  transition,
}: Props) => {
  const isInvalidStep = currentStep => currentStep < 0 || currentStep > children.length;

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

  const childrenWithProps = React.Children.map(children, (child, i) => {
    // child has 0 starting index
    const isStepActive = i + 1 === activeStep;

    if (isStepActive) {
      return (
        <Step isActive={isStepActive} transition={transition}>
          {child}
        </Step>
      );
    }

    return null;
  });

  return (
    <div className={className} style={style}>
      <Nav activeStep={activeStep} totalSteps={children.length} goToStep={goToStep} />
      <WizardContainer>{childrenWithProps}</WizardContainer>
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
