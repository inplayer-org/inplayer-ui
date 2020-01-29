// @flow
import React, { Fragment } from 'packages/inplayer-ui/ThemeWrapper/react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'packages/inplayer-ui/ThemeWrapper/config/globalStyles';
import configureFonts from 'packages/inplayer-ui/ThemeWrapper/config/configureFonts';
import theme from 'packages/inplayer-ui/ThemeWrapper/config/theme';

type Props = { children: Node };

const GlobalContainer = ({ children }: Props) => {
  configureFonts(theme);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles suppressMultiMountWarning />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default GlobalContainer;
