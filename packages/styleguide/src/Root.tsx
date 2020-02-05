import React, { FunctionComponent } from 'react';
import { ThemeWrapper } from '@inplayer-org/inplayer-ui';
import { ThemeProvider } from 'styled-components';
import App from './App';

const Root: FunctionComponent<{}> = () => (
  <ThemeWrapper withProvider={ThemeProvider}>
      <App />
  </ThemeWrapper>
);

export default Root;
