import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { AnalyticsProps } from '../../analytics';
import colors from '../../theme/colors';

const StepNavigation = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const StepAction = styled.span<{
  isActive: boolean;
  isCompleted: boolean;
  isDisabled: boolean;
}>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.extraLarge};
  line-height: 1;
  margin: 0 1.5rem;
  opacity: 0.4;
  text-shadow: none;
  transition: opacity 1s ease, text-shadow 1s ease;
  will-change: opacity, text-shadow;
  ${ifProp(
    'isActive',
    css`
      color: ${colors.skyBlue};
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

export type StepItem = {
  isDisabled: boolean;
  isCompleted: boolean;
  component: React.ReactChild;
} & AnalyticsProps;

type Props = {
  steps: Array<StepItem>;
  activeStep: number;
  goToStep: (activeStep: number) => void;
} & AnalyticsProps;

const Nav = ({ steps, goToStep, activeStep }: Props) => (
  <StepNavigation>
    {steps.map(({ isDisabled, isCompleted }, i) => (
      <StepAction
        key={`step-${i}`}
        isActive={i === activeStep}
        isCompleted={isCompleted}
        onClick={() => goToStep(i)}
        isDisabled={isDisabled}
      >
        &bull;
      </StepAction>
    ))}
  </StepNavigation>
);

export default Nav;
