import React from 'react';
import { Typography, Colors } from 'src/index';
import styled from 'styled-components';
import Card from './index';

export default {
  component: Card,
  title: 'Card',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

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

export const cardWithoutTitle = () => (
  <Container>
    <Typography variant="h1" color="black">
      Card Without Title
    </Typography>
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
  </Container>
);

export const WithTitle = () => (
  <Container>
    <Typography variant="h1" color="black">
      Card With Title
    </Typography>
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
  </Container>
);
