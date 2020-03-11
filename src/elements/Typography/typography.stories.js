import React from 'react';
import styled from 'styled-components';
import { Colors } from 'src/index';
import Typography from './index';

export default {
  component: Typography,
  title: 'Typography',
};

const Container = styled.div`
  margin: auto;
  width: 90%;
`;
const BoxContainer = styled.div`
  border: 1px solid ${Colors.darkGray};
  width: 90%;
  padding-left: 40px;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;
export const Demo = props => (
  <Container>
    <HeadlineTypography variant="h3">Typography</HeadlineTypography>
    <Typography variant="p" description>
      Typography is an element which allows you to control the style of your text. It has a
      `variant` prop which allows you to choose between the h1-h6 headings. It inherits the
      `palette.primary.dark` text color, however this can be overridden by using styled-components.
    </Typography>
    <HeadlineTypography variant="h4">Demo</HeadlineTypography>
    <BoxContainer>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h2">Heading H2</Typography>
      <Typography variant="h3">Heading H3</Typography>
      <Typography variant="h4">Heading H4</Typography>
      <Typography variant="h5">Heading H5</Typography>
      <Typography variant="h6">Heading H6</Typography>
      <Typography variant="p">Paragraph</Typography>
      <Typography variant="p" description>
        Paragraph as description
      </Typography>
    </BoxContainer>
  </Container>
);
export const TypographyWithModifires = props => (
  <Container>
    <HeadlineTypography variant="h4">Typography With Modifires</HeadlineTypography>
    <BoxContainer>
      <Typography variant="h1" modifiers={['textPrimary']}>
        Heading H1 with primary modifier
      </Typography>
      <Typography variant="h2" modifiers={['textDanger']}>
        Heading H1 with danger modifier
      </Typography>
      <Typography variant="h3" modifiers={['textSuccess']}>
        Heading H1 with success modifier
      </Typography>
      <Typography variant="h4" modifiers={['textWarning']}>
        Heading H1 with warning modifier
      </Typography>
    </BoxContainer>
  </Container>
);
export const TypographyWithCustomColorProvideed = props => (
  <Container>
    <HeadlineTypography variant="h4">Typography With Custom Color Provideed</HeadlineTypography>
    <BoxContainer>
      <Typography variant="h1" color="red">
        Heading H1 with custom red color
      </Typography>
      <Typography variant="h2" color="mint">
        Heading H1 with custom mint color
      </Typography>
      <Typography variant="h3" color="purple">
        Heading H1 with custom purple color
      </Typography>
      <Typography variant="h4" color="black">
        Heading H1 with custom black color
      </Typography>
    </BoxContainer>
  </Container>
);
