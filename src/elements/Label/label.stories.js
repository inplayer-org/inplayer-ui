// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Typography from '../Typography/index';
import Label from './index';

export default {
  component: Label,
  title: 'Label',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const withText = () => (
  <Container>
    <Typography variant="h1" color="black">
      Label with Text
    </Typography>
    <Typography variant="p" description>
      Label is a element used with input elements. You can use it directly like this:
    </Typography>
    <Label className="" size="Medium" style={{}}>
      Label
    </Label>
    <br />
    <Label disabled>Label Disabled</Label>
  </Container>
);

// Label with font size Modifiers

export const withSizes = () => (
  <Container>
    <Typography variant="h1" color="black">
      Label with different sizes
    </Typography>
    <Typography variant="p" description>
      Label is a element used with input elements. You can use it directly like this:
    </Typography>
    <Label modifiers={['fontSizeExtraSmall']}>Extra Small</Label>
    <br />
    <br />
    <Label modifiers={['fontSizeSmall']}>Small</Label>
    <br />
    <br />
    <Label modifiers={['fontSizeMedium']}>Medium</Label>
    <br />
    <br />
    <Label modifiers={['fontSizeLarge']}>Large</Label>
  </Container>
);
