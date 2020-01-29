import React from 'react';
import { renderWithTheme } from 'helpers';
import Cell from '../Cell';
import 'jest-styled-components';

describe('Grid.Column Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
