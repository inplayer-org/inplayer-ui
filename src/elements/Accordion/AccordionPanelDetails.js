// @flow
import React from 'react';
import styled from 'styled-components';
import Typography from 'elements/Typography/index';

const AccordionPanelDetailsContainer = styled.div`
  padding: 10px 6% 26px;
`;

const AccordionPanelDetails = () => (
  <AccordionPanelDetailsContainer>
    <Typography variant="p">The asset</Typography>
  </AccordionPanelDetailsContainer>
);

export default AccordionPanelDetails;
