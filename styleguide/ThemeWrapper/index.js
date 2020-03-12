// @flow
import React from 'react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'config/globalStyles';
import theme from 'config/theme';

type Props = { children: Node };

const GlobalContainer = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles suppressMultiMountWarning />
      {children}
    </>
  </ThemeProvider>
);

export default GlobalContainer;
