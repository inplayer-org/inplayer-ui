// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';
import { uiColors, fontWeights } from 'utils';

// Components
import Icon from 'elements/Icon';
import Typography from 'elements/Typography';

const AccordionPanelContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: ${colors.white};
  transition: ease 500ms height;
  display: none;
  ${ifProp(
    'isActive',
    css`
      position: absolute;
      ${({ contentHeight }) => contentHeight && `height: calc(${contentHeight} - 15.5rem)`};
      top: 0;
      z-index: 30;
      border-bottom: none;
      overflow: auto;
      margin-top: 3.5rem;
      display: block;
    `
  )};
`;

const AccordionPanelHeader = styled.header`
  margin: 0;
  padding: 1rem 3%;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ifProp(
    'isActive',
    css`
      position: absolute;
      top: 0;
    `
  )};
`;

const AccordionTitle = styled(Typography)`
  font-weight: ${fontWeights('thin')};
  color: ${uiColors('text.main')};
  margin: 0;
  cursor: ${ifProp('isActive', 'default', 'pointer')};
  display: inline;
`;

const AccordionIcon = styled(Icon)`
  color: ${uiColors('primary.main')};
`;

const AccordionPanelDetails = styled.div`
  padding: 2rem 6%;
`;

type Props = {
  label: string,
  isActive: boolean,
  icon?: string,
  contentHeight: string,
  openPanel: (name: string) => boolean,
  renderContent: () => any,
};

const AccordionPanel = ({
  openPanel,
  label,
  isActive,
  icon,
  renderContent,
  contentHeight,
}: Props) => (
  <>
    <AccordionPanelHeader onClick={openPanel} isActive={isActive}>
      <AccordionTitle variant="h6" isActive={isActive}>
        {label}
      </AccordionTitle>
      <AccordionIcon name={icon} />
    </AccordionPanelHeader>
    <AccordionPanelContainer isActive={isActive} contentHeight={contentHeight}>
      <AccordionPanelDetails>{isActive && renderContent()}</AccordionPanelDetails>
    </AccordionPanelContainer>
  </>
);

AccordionPanel.defaultProps = {
  icon: '',
};

export default AccordionPanel;
