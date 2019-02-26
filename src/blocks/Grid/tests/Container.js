import React from 'react';
import { renderWithTheme } from 'helpers';
import Container from '../Container';
import 'jest-styled-components';

describe('Grid.Container Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
