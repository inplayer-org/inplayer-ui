// @flow
import React from 'react';
import styled from 'styled-components';
import Typography from 'elements/Typography/index';

const AccordionPanelDetailsContainer = styled.div`
  padding: 10px 6% 26px;
`;

type Props = {
  content: string,
};

const AccordionPanelDetails = ({ content }: Props) => (
  <AccordionPanelDetailsContainer>
    <Typography variant="p">{content}</Typography>
  </AccordionPanelDetailsContainer>
);

export default AccordionPanelDetails;
