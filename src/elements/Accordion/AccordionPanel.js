// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';
import { uiColors } from 'utils';

// Components
import Typography from '../Typography';
import AccordionPanelDetails from './AccordionPanelDetails';
import AccordionFooter from './AccordionFooter';
import Icon from '../Icon';

const AccordionPanelContainer = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: ${colors.white};
  transition: ease 500ms height;
  ${ifProp(
    'open',
    css`
      height: 220px;
      top: 0;
      z-index: 30;
      border-bottom: none;
      overflow: auto;
    `
  )};
`;

const AccordionPanelHeader = styled.header`
  position: relative;
  margin: 0;
  padding: 12px 3%;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
`;

const AccordionTitle = styled(Typography)`
  font-weight: 100 !important;
  color: #286090 !important;
  margin: 0 !important;
  font-size: 22px !important;
`;

const AccordionIcon = styled(Icon)`
  position: absolute;
  right: 3%;
  top: 18px;
  color: ${uiColors('primary.main')};
`;

type Props = {
  label: string,
  content: string,
  activeTab: string,
  index: number,
  activateTab: Function,
  saveAction: Function,
};

const AccordionPanel = ({ activateTab, label, content, activeTab, index, saveAction }: Props) => (
  <AccordionPanelContainer onClick={activateTab} open={activeTab === index}>
    <AccordionPanelHeader>
      <AccordionTitle variant="h3">{label}</AccordionTitle>
      <AccordionIcon name="info-circle" />
    </AccordionPanelHeader>
    <AccordionPanelDetails content={content} />
    {activeTab === index && <AccordionFooter open={activeTab === index} saveAction={saveAction} />}
  </AccordionPanelContainer>
);

export default AccordionPanel;
