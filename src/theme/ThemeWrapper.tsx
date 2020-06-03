import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from './globalStyles';
import { Theme } from './theme';
import loadFonts from './loadFonts';

interface Props {
  children: ReactNode;
  theme?: DefaultTheme;
}

const ThemeWrapper = ({ children, theme }: Props) => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ThemeProvider theme={theme || Theme}>
      <>
        <GlobalStyles suppressMultiMountWarning />
        {children}
      </>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
