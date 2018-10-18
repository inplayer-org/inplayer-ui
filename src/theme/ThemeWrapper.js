// @flow
import React from 'react';
import type { Node } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import buildGlobalStyles from 'config/buildGlobalStyles';
import configureFonts from 'config/configureFonts';
import fallbackTheme from 'config/theme';
import type { Theme } from 'types/Theme';

type Props = { children: Node, theme: ?Theme };

const ThemeWrapper = ({ children, theme }: Props) => {
  const appTheme = theme || fallbackTheme;
  configureFonts(appTheme);
  injectGlobal(...buildGlobalStyles(appTheme));
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
