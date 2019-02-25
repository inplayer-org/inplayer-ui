import React from 'react';
import { renderWithTheme } from 'helpers';
import Cell from '../Cell';
import 'jest-styled-components';

describe('Grid.Column Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the correct style with the `flex` prop', () => {
    const tree = renderWithTheme(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the correct style with the `position` modifier', () => {
    const tree = renderWithTheme(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
