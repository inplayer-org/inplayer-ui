import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from 'theme/globalStyles';
import { Theme } from './theme';

interface Props {
  children: ReactNode;
  theme?: DefaultTheme;
}

const ThemeWrapper = ({ children, theme }: Props) => {
  const appTheme = theme || Theme;

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles suppressMultiMountWarning />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
