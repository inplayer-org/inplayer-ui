// @flow
import React from 'react';
import styled from 'styled-components';

// components
import { FaBeer } from 'react-icons/fa';
import Typography from '../Typography/index';
import Input from './index';

export default {
  component: Input,
  title: 'Input',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const withText = () => (
  <Container>
    <Typography variant="h1" color="black">
      Input with Text
    </Typography>
    <Typography variant="p" description>
      Text input is a input component for text. You can use it directly like this:
    </Typography>
    <Input type="text" placeholder="text" onChange={console.log} style={{ marginTop: '1rem' }} />
  </Container>
);

export const searchField = () => (
  <Container>
    <Typography variant="h1" color="black">
      Search Field
    </Typography>
    <Typography variant="p" description>
      Text input is a input component for text. You can use it for a search component like this:
    </Typography>
    <Input
      type="search"
      placeholder="Search"
      onChange={console.log}
      style={{ marginTop: '1rem' }}
    />
  </Container>
);

export const withIcon = () => (
  <Container>
    <Typography variant="h1" color="black">
      Input with Icon
    </Typography>
    <Typography variant="p" description>
      Text input is a input component for text. You can use it with an icon like this:
    </Typography>
    <Input
      type="text"
      placeholder="Input with icon"
      style={{ marginTop: '1rem' }}
      iconName="lock"
    />
  </Container>
);

export const withCustomIcon = () => (
  <Container>
    <Typography variant="h1" color="black">
      Input with a Custom Icon
    </Typography>
    <Typography variant="p" description>
      Text input is a input component for text. You can use it with a custom icon like this:
    </Typography>
    <Input type="text" placeholder="Input with custom icon" icon={<FaBeer />} />
  </Container>
);

export const withSizes = () => (
  <Container>
    <Typography variant="h1" color="black">
      Input with different sizes
    </Typography>
    <Typography variant="p" description>
      Text input is a input component for text. You can use it in these different sizes:
    </Typography>
    <Input size="xs" type="text" placeholder="Extra Small Input" style={{ marginTop: '1rem' }} />
    <Input size="sm" type="text" placeholder="Small Input" style={{ marginTop: '1rem' }} />
    <Input size="md" type="text" placeholder="Medium Input" style={{ marginTop: '1rem' }} />
    <Input size="lg" type="text" placeholder="Large Input" style={{ marginTop: '1rem' }} />
  </Container>
);
