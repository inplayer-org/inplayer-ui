// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'config/globalStyles';
import configureFonts from 'config/configureFonts';
import fallbackTheme from 'config/theme';
import type { Theme } from 'types/Theme';

type Props = { children: Node, theme: ?Theme };

const ThemeWrapper = ({ children, theme }: Props) => {
  const appTheme = theme || fallbackTheme;
  configureFonts(appTheme);
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <GlobalStyles theme={appTheme} suppressMultiMountWarning />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
