import React from 'react';
import { Typography, Colors } from 'src/index';
import styled from 'styled-components';
import TextArea from './index';

export default {
  component: TextArea,
  title: 'TextArea',
};

const Container = styled.div`
  margin: auto;
  width: 90%;
`;

const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h3">TextArea</HeadlineTypography>
    <Typography variant="p" description>
      Text area is a input component for text area.{' '}
    </Typography>
    <TextArea defaultValue="Write something:)" />
  </Container>
);
