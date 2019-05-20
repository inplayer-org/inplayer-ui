// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { uiColors } from 'utils';

const StepNavigation = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const StepAction = styled.span`
  color: black;
  cursor: pointer;
  font-size: 36px;
  line-height: 1;
  margin: 0 15px;
  opacity: 0.4;
  text-shadow: none;
  transition: opacity 1s ease, text-shadow 1s ease;
  will-change: opacity, text-shadow;
  ${ifProp(
    'isActive',
    css`
      color: ${uiColors('primary.main')};
      opacity: 1;
      text-shadow: 0 0px 8px;
    `
  )};
`;

type Props = {
  totalSteps: number,
  activeStep: number,
  goToStep: (activeStep: number) => void,
};

const Nav = ({ totalSteps, activeStep, goToStep }: Props) => {
  const dots = [];
  for (let i = 1; i <= totalSteps; i += 1) {
    const isActive = activeStep === i;
    dots.push(
      <StepAction isActive={isActive} key={`step-${i}`} onClick={() => goToStep(i)}>
        &bull;
      </StepAction>
    );
  }

  return <StepNavigation>{dots}</StepNavigation>;
};

export default Nav;
