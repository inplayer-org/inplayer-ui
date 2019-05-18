// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Step from './Step';

type TransitionVariant = 'fadeInLeft' | 'fadeInRight' | 'fadeOutLeft' | 'fadeOutRight';

type Props = {
  children?: React.ReactNode,
  className?: string,
  initialStep?: number,
  nav?: React.ReacNode,
  isHashEnabled?: boolean,
  onStepChange?: Function,
  transition?: TransitionVariant,
};

type State = {
  activeStep: number,
};

const WizardContainer = styled.div`
  position: relative;
`;

export default class StepWizard extends PureComponent<Props, State> {
  state = {
    activeStep: 0,
  };

  isInvalidStep = next => {
    const { children } = this.props;

    return next < 0 || next >= children.length;
  };

  setActiveStep = nextStep => {
    const { activeStep } = this.state;
    if (activeStep === nextStep) return;
    if (this.isInvalidStep(nextStep)) {
      console.error(`${nextStep + 1} is an invalid step`);
      return;
    }

    this.setState(
      {
        activeStep: nextStep,
      },
      () => {
        // Step change callback
        this.onStepChange({
          previousStep: activeStep + 1,
          activeStep: nextStep + 1,
        });
      }
    );
  };

  onStepChange = stats => {
    const { onStepChange, isHashEnabled } = this.props;
    const { activeStep } = this.state;

    // User callback
    onStepChange(stats);

    // Update hash if prop set
    if (isHashEnabled) this.updateHash(activeStep);
  };

  /** Go to first step */
  firstStep = () => this.goToStep(1);

  /** Go to last step */
  lastStep = () => {
    const { children } = this.props;
    this.goToStep(children.length);
  };

  /** Next Step */
  lastStep = () => {
    const { activeStep } = this.state;
    this.setActiveStep(activeStep + 1);
  };

  /** Previous Step */
  previousStep = () => {
    const { activeStep } = this.state;
    this.setActiveStep(activeStep - 1);
  };

  /** Go to step index */
  goToStep = step => this.setActiveStep(step - 1);

  // updateHash = activeStep => {
  //   const { hashKeys } = this.state;
  //   window.location.hash = hashKeys[activeStep];
  // };

  // Allows for using HTML elements as a step
  isReactComponent = ({ type }) => {
    console.error(typeof type === 'function' || typeof type === 'object');
    return typeof type === 'function' || typeof type === 'object';
  };

  /** Render */
  render() {
    const { activeStep } = this.state;
    const { children, transition, initialStep } = this.props;

    const props = {
      currentStep: activeStep + 1,
      totalSteps: children.length,
      /** Functions */
      nextStep: this.nextStep,
      previousStep: this.previousStep,
      goToStep: this.goToStep,
      firstStep: this.firstStep,
      lastStep: this.lastStep,
    };

    const childrenWithProps = React.Children.map(children, (child, i) => {
      const isStepActive = i === initialStep;

      console.error(child);

      if (isStepActive) {
        return (
          <Step isActive={isStepActive} transition={transition}>
            {this.isReactComponent(child) ? React.cloneElement(child, props) : child}
          </Step>
        );
      }

      return null;
    });

    const { nav, className } = this.props;

    return (
      <div className={className}>
        {nav && React.cloneElement(nav, props)}
        <WizardContainer>{childrenWithProps}</WizardContainer>
      </div>
    );
  }
}

StepWizard.defaultProps = {
  children: [],
  className: null,
  initialStep: 1,
  instance: () => {},
  isHashEnabled: false,
  nav: null,
  transition: null,
  onStepChange: () => {},
};
