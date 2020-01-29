// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import GlobalStyles from 'config/globalStyles';
import configureFonts from 'config/configureFonts';
import fallbackTheme from 'config/theme';
import type { Theme } from 'types/Theme';

type Props = {
  children: Node,
  theme: ?Theme,
  withProvider?: ComponentType,
};

const ThemeWrapper = ({ children, theme, withProvider: Provider }: Props) => {
  const appTheme = theme || fallbackTheme;
  configureFonts(appTheme);
  return (
    <Provider theme={appTheme}>
      <DefaultThemeProvider theme={appTheme}>
        <>
          <GlobalStyles suppressMultiMountWarning />
          {children}
        </>
      </DefaultThemeProvider>
    </Provider>
  );
};

ThemeWrapper.defaultProps = {
  withProvider: DefaultThemeProvider,
};

export default ThemeWrapper;
