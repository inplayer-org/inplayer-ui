// @flow
import React from 'packages/inplayer-ui/src/theme/react';
import type { Node, ComponentType } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import GlobalStyles from 'packages/inplayer-ui/src/config/globalStyles';
import configureFonts from 'packages/inplayer-ui/src/config/configureFonts';
import fallbackTheme from 'packages/inplayer-ui/src/config/theme';
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
