// @flow
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { uiColors, fontSizes } from 'utils';
import colors from 'config/colors';

const StepNavigation = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const StepAction = styled.span`
  cursor: pointer;
  font-size: ${fontSizes('extraLarge')};
  line-height: 1;
  margin: 0 1.5rem;
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
  ${ifProp(
    'isDisabled',
    css`
      pointer-events: none;
    `
  )};
  ${ifProp(
    'isCompleted',
    css`
      color: ${colors.green};
      opacity: 1;
      text-shadow: 0 0px 8px;
    `
  )};
`;

type Props = {
  stepActions: Array<Node>,
  activeStep: number,
  goToStep: (activeStep: number) => void,
};

const Nav = ({ stepActions, goToStep, activeStep }: Props) => (
  <StepNavigation>
    {stepActions.map(({ props: { isDisabled, isCompleted } }, i) => (
      <StepAction
        key={`step-${i}`}
        isActive={i === activeStep}
        isDisabled={isDisabled}
        isCompleted={isCompleted}
        onClick={() => goToStep(i)}
      >
        &bull;
      </StepAction>
    ))}
  </StepNavigation>
);

export default Nav;
