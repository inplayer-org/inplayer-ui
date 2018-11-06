// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';
import Typography from '../Typography';
import Icon from '../Icon';

const AccordionPanelContainer = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: #fff;
  transition: ease 500ms height;
  ${ifProp(
    'open',
    css`
      height: calc(100vh - 120px - 72px);
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
  background: #fff;
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
  color: #00aae6;
`;

type Props = {
  open: boolean,
  toggleOpen: Function,
};

const AccordionPanel = ({ toggleOpen, open }: Props) => (
  <AccordionPanelContainer onClick={toggleOpen} open={open}>
    <AccordionPanelHeader>
      <AccordionTitle variant="h3">Protected asset</AccordionTitle>
      <AccordionIcon name="info-circle" />
    </AccordionPanelHeader>
  </AccordionPanelContainer>
);

export default AccordionPanel;
