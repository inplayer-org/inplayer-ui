import React from 'react';
import { Loader, Typography } from 'src/index';

export default {
  component: Loader,
  title: 'Loader',
};

export const DefaultLoader = () => (
  <>
    <Typography variant="h3">Standard Loader</Typography>
    <Typography variant="p" description>
      A simple spinner/loader to use as fallback when doing async operations. By default inherits
      the primary.main (#07AAE6) theme color. Can be passed a color prop with a custom color.
    </Typography>
    <Loader />
  </>
);

export const LoaderWithProps = () => (
  <>
    <Typography variant="h3">Loader with props</Typography>
    <Typography variant="p" description>
      A simple spinner/loader to use as fallback when doing async operations. By default inherits
      the primary.main (#07AAE6) theme color. Can be passed a color prop with a custom color.
    </Typography>
    <Loader color="orange" height={150} width={150} direction="left" lineWidth={3} />
  </>
);
