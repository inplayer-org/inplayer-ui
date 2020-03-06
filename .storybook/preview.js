import React from 'react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { version } from '../package.json';
import theme from '../src/config/theme';

// Storybook theme
const storybookTheme = create({
  base: 'light',
  // brand
  brandTitle: `InPlayer UI ${version}`,
  brandUrl: 'https://github.com/inplayer-org/inplayer-ui',
  brandImage: 'https://assets.inplayer.com/images/inplayer-256.png',
});

// Parameters
addParameters({
  options: {
    theme: storybookTheme,
    showPanel: false,
    isFullscreen: false,
    storySort: undefined,
    isToolshown: true,
  },
});

// Decorators
addDecorator(withInfo);
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
