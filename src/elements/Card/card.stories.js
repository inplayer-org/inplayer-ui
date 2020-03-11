import React from 'react';
import { Typography, Colors } from 'src/index';
import styled from 'styled-components';
import Card from './index';

export default {
  component: Card,
  title: 'Card',
};
const StyledContainer = styled.div`
  width: 60vw;
  height: 60vh;
  margin-left: 100px;
  margin-top: 100px;
  border: 1px solid ${Colors.darkGray};
  background-color: ${Colors.gray};
`;
const HeadlineTypography = styled(Typography)`
  margin-left: 40px;
  margin-bottom: 0;
  color: ${Colors.darkBlue};
`;
const DescriptionTypography = styled(Typography)`
  margin-left: 40px;
  margin-bottom: 40px;
`;

export const SimpleCard = props => (
  <StyledContainer>
    <HeadlineTypography variant="h4">Card without title</HeadlineTypography>
    <DescriptionTypography variant="p" description>
      Cards contain content and actions about a single subject.
    </DescriptionTypography>
    <Card style={{ width: 400, marginLeft: 100 }}>
      <Typography variant="p">Card content</Typography>
      <Typography variant="p">Card content</Typography>
      <Typography variant="p">Card content</Typography>
    </Card>
  </StyledContainer>
);
export const WithTitle = props => (
  <StyledContainer>
    <HeadlineTypography variant="h4">Card with title</HeadlineTypography>
    <DescriptionTypography variant="p" description>
      Cards contain content and actions about a single subject.
    </DescriptionTypography>
    <Card title="Title" titleVariant="h1" style={{ width: 400, marginLeft: 100, marginTop: 40 }}>
      <Typography variant="p">Card content</Typography>
      <Typography variant="p">Card content</Typography>
      <Typography variant="p">Card content</Typography>
    </Card>
  </StyledContainer>
);
