import React from 'packages/inplayer-ui/src/blocks/Grid/tests/react';
import { renderWithTheme } from 'packages/inplayer-ui/src/blocks/Grid/tests/helpers';
import Cell from '../Cell';
import 'packages/inplayer-ui/src/blocks/Grid/tests/jest-styled-components';

describe('Grid.Column Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
