import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import buildGlobalStyles from '../../config/buildGlobalStyles';
import configureFonts from '../../config/configureFonts';
import theme from '../../config/theme';

injectGlobal([buildGlobalStyles(theme)]);
configureFonts(theme);

const ThemeWrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeWrapper;
