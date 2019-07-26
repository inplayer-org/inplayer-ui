// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';

type Props = {
  isActive: boolean,
  closePanel: () => void,
  renderActionButton: ({
    closeAccordion: (e?: SyntheticEvent<*>) => void,
  }) => Node,
  renderFooterLink: ({
    closeAccordion: (e?: SyntheticEvent<*>) => void,
  }) => Node,
};

const AccordionFooterContainer = styled.footer`
  position: absolute;
  bottom: ${ifProp('isActive', '0', '-80px')};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 3%;
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

const AccordionFooter = ({ closePanel, isActive, renderActionButton, renderFooterLink }: Props) => (
  <AccordionFooterContainer isActive={isActive}>
    {renderFooterLink({ closeAccordion: closePanel })}
    {renderActionButton({ closeAccordion: closePanel })}
  </AccordionFooterContainer>
);

export default AccordionFooter;
