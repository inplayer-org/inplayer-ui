// @flow
import React from 'react';
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

  const renderChildren = React.Children.map(children, (child, i) => {
    const isStepActive = i === activeStep;

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
      <Nav stepActions={children} activeStep={activeStep} goToStep={goToStep} />
      <div>{renderChildren}</div>
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
