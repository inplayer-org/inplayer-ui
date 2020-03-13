import React, { ReactNode } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import GlobalStyles from 'config/globalStyles';
import { Theme, ITheme } from 'config/theme';

interface Props {
  children: ReactNode;
  theme?: ITheme;
}

const ThemeWrapper = ({ children, theme }: Props) => {
  const appTheme = theme || Theme;

  return (
    <DefaultThemeProvider theme={appTheme}>
      <GlobalStyles suppressMultiMountWarning />
      {children}
    </DefaultThemeProvider>
  );
};

export default ThemeWrapper;
