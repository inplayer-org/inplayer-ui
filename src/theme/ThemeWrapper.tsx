import React, { ReactNode } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import GlobalStyles from 'config/globalStyles';
import fallbackTheme from 'config/theme';
import { Theme } from 'types/Theme';

interface Props {
  children: ReactNode;
  theme?: Theme;
}

const ThemeWrapper = ({ children, theme }: Props) => {
  const appTheme = theme || fallbackTheme;

  return (
    <DefaultThemeProvider theme={appTheme}>
      <GlobalStyles suppressMultiMountWarning />
      {children}
    </DefaultThemeProvider>
  );
};

export default ThemeWrapper;
