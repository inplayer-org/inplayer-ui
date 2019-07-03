// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors, fontWeights } from 'utils';
import { ifProp } from 'styled-tools';

type Props = {
  isActive: boolean,
  closePanel: () => void,
  actionButton: () => Node,
};

const AccordionFooterContainer = styled.footer`
  position: absolute;
  bottom: ${ifProp('isActive', '0', '-80px')};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3%;
  background: ${ifProp('isActive', `${colors.white}`, `${colors.pale}`)};
  align-items: center;
  transition-timing-function: ease, ease;
  transition-duration: 400ms, 1000ms;
  transition-property: all, background;
  transition-delay: 0s, 300ms;
  z-index: ${ifProp('isActive', '25', '10')};
  border-top: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
`;

const AccordionFooterLink = styled.a`
  color: ${uiColors('text.light')};
  font-weight: ${fontWeights('light')};
  cursor: pointer;
`;

const AccordionFooter = ({ closePanel, isActive, actionButton }: Props) => (
  <AccordionFooterContainer isActive={isActive}>
    <AccordionFooterLink onClick={closePanel}>Close</AccordionFooterLink>
    {actionButton()}
  </AccordionFooterContainer>
);

export default AccordionFooter;
