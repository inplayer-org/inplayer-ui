import React from 'react';
import { Loader, Typography } from 'src/index';

export default {
  component: Loader,
  title: 'Loader',
};

export const DefaultLoader = () => (
  <>
    <h3>Standard loader</h3>
    <Loader />
  </>
);

export const LoaderWithProps = () => (
  <>
    <h3>Loader with props</h3>
    <Loader height={150} width={150} direction="left" lineWidth={3} />
  </>
);
