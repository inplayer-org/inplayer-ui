// @flow
import React from 'react';
import styled from 'styled-components';
import colors from 'config/colors';

const AccordionPanelContainer = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: #fff;
  transition: ease 500ms height;

  .openup {
    /* position: absolute; */
    height: calc(100vh - 120px - 72px);
    top: 0;
    z-index: 30;
    border-bottom: none;
    overflow: auto;
  }
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

// const AccordionPanelIcon = styled.()`
//   position: absolute;
//   right: 3%;
//   top: 18px;
//   color: ${colors.white};
// `;

const AccordionPanel = () => (
  <AccordionPanelContainer>
    <AccordionPanelHeader />
  </AccordionPanelContainer>
);

export default AccordionPanel;
