// @flow
import React from "react";
import type { Node } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";

import buildGlobalStyles from "../../config/buildGlobalStyles";
import configureFonts from "../../config/configureFonts";
import theme from "../../config/theme";

injectGlobal([buildGlobalStyles(theme)]);
configureFonts(theme);

type Props = { children: Node };

const ThemeWrapper = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeWrapper;
