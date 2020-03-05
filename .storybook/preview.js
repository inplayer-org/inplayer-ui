import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withInfo } from '@storybook/addon-info';
import theme from '../src/config/theme';

addDecorator(withInfo);

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
