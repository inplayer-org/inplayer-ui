// @flow
import React from 'react';
import type { Node } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import buildGlobalStyles from 'config/buildGlobalStyles';
import configureFonts from 'config/configureFonts';
import theme from 'config/theme';

type Props = { children: Node };

const GlobalContainer = ({ children }: Props) => {
  configureFonts(theme);
  injectGlobal(...buildGlobalStyles(theme));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalContainer;
