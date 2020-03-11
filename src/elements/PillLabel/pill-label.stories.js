import React from 'react';
import styled from 'styled-components';
import { PillLabel } from 'elements/index';
import { Typography } from 'src/index';

export default {
  component: PillLabel,
  title: 'PillLabel',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const Default = () => (
  <Container>
    <Typography variant="h1" color="black">
      White PillLabel
    </Typography>
    <PillLabel>Test Pill</PillLabel>
  </Container>
);

export const Primary = () => (
  <Container>
    <Typography variant="h1" color="black">
      Blue PillLabel
    </Typography>
    <PillLabel modifiers={['primary']}>Test Pill</PillLabel>
  </Container>
);

export const Warning = () => (
  <Container>
    <Typography variant="h1" color="black">
      Yellow PillLabel
    </Typography>
    <Typography variant="p" description>
      Warning Label with prop <b>size="lg"</b>
    </Typography>
    <PillLabel size="lg" modifiers={['warning']}>
      Test Pill
    </PillLabel>
  </Container>
);

export const Danger = () => (
  <Container>
    <Typography variant="h1" color="black">
      Red PillLabel
    </Typography>
    <Typography variant="p" description>
      Danger Label with prop <b>size="sm"</b>
    </Typography>
    <PillLabel size="sm" modifiers={['danger']}>
      Test Pill
    </PillLabel>
  </Container>
);

export const Success = () => (
  <Container>
    <Typography variant="h1" color="black">
      Green PillLabel
    </Typography>
    <Typography variant="p" description>
      Success Label with prop <b>size="xs"</b>
    </Typography>
    <PillLabel size="xs" modifiers={['success']}>
      Test Pill
    </PillLabel>
  </Container>
);
