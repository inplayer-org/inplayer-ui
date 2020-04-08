import React from 'react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from 'styled-components';
import { version } from '../package.json';
import { Theme } from '../src/theme/theme';

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
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// Decorators
addDecorator(withInfo);
addDecorator((storyFn) => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>);
