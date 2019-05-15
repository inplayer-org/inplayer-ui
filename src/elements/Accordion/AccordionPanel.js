// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';
import { uiColors, fontWeights, fontSizes } from 'utils';

// Components
import Icon from 'elements/Icon';
import Typography from 'elements/Typography';
import AccordionFooter from './AccordionFooter';

const AccordionPanelContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: ${colors.white};
  transition: ease 500ms height;
  ${ifProp(
    'open',
    css`
      position: absolute;
      ${({ contentHeight }) => contentHeight && `height: calc(${contentHeight} - 120px)`};
      top: 0;
      z-index: 30;
      border-bottom: none;
      overflow: auto;
    `
  )};
`;

const AccordionPanelHeader = styled.header`
  margin: 0;
  padding: 0.75rem 3%;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionTitle = styled(Typography)`
  font-weight: ${fontWeights('thin')};
  color: ${uiColors('text.main')};
  margin: 0;
  font-size: ${fontSizes('h5')};
  cursor: pointer;
  display: inline;
`;

const AccordionIcon = styled(Icon)`
  color: ${uiColors('primary.main')};
`;

const AccordionPanelDetails = styled.div`
  padding: 0.625rem 6% 26px;
`;

type Props = {
  label: string,
  activeTab: string,
  icon?: string,
  buttonText: string,
  footerLink: string,
  contentHeight: string,
  toggleOpen: (name: string) => boolean,
  toggleClose: (name: string) => boolean,
  accordionAction: () => any,
  renderContent: () => any,
};

const AccordionPanel = ({
  toggleOpen,
  label,
  activeTab,
  toggleClose,
  accordionAction,
  icon,
  footerLink,
  buttonText,
  renderContent,
  contentHeight,
}: Props) => (
  <AccordionPanelContainer open={activeTab} contentHeight={contentHeight}>
    <AccordionPanelHeader onClick={toggleOpen}>
      <AccordionTitle variant="h3">{label}</AccordionTitle>
      <AccordionIcon name={icon} />
    </AccordionPanelHeader>
    <AccordionPanelDetails>{renderContent()}</AccordionPanelDetails>
    {activeTab && (
      <AccordionFooter
        open={activeTab}
        toggleClose={toggleClose}
        accordionAction={accordionAction}
        footerLink={footerLink}
        buttonText={buttonText}
      />
    )}
  </AccordionPanelContainer>
);

AccordionPanel.defaultProps = {
  icon: '',
};

export default AccordionPanel;
