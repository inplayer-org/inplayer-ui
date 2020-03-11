// @flow
import React from 'react';
import styled from 'styled-components';

// components
import { Loader, Typography } from 'src/index';

export default {
  component: Loader,
  title: 'Loader',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const DefaultLoader = () => (
  <Container>
    <Typography variant="h1" color="black">
      Standard Loader
    </Typography>
    <Typography variant="p" description>
      A simple spinner/loader to use as fallback when doing async operations. By default inherits
      the primary.main (#07AAE6) theme color. Can be passed a color prop with a custom color.
    </Typography>
    <Loader />
  </Container>
);

export const LoaderWithProps = () => (
  <Container>
    <Typography variant="h1" color="black">
      Loader with props
    </Typography>
    <Typography variant="p" description>
      A simple spinner/loader to use as fallback when doing async operations. By default inherits
      the primary.main (#07AAE6) theme color. Can be passed a color prop with a custom color.
    </Typography>
    <Loader color="orange" height={150} width={150} direction="left" lineWidth={3} />
  </Container>
);
