import React from 'react';
import { Loader, Typography } from 'src/index';

export default {
  component: Loader,
  title: 'Loader',
};

export const DefaultLoader = () => (
  <>
    <Typography variant="h3">Standard Loader</Typography>
    <Loader />
  </>
);

export const LoaderWithProps = () => (
  <>
    <Typography variant="h3">Loader with props</Typography>
    <Loader height={150} width={150} direction="left" lineWidth={3} />
  </>
);
