import React from 'react';
import { renderWithTheme } from 'helpers';
import Column from '../Column';
import 'jest-styled-components';

describe('Grid.Column Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Column />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the correct style with the `flex` prop', () => {
    const tree = renderWithTheme(<Column flex="1" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex', '1');
  });

  it('applies the correct style with the `position` modifier', () => {
    const tree = renderWithTheme(<Column modifiers={['positionRelative']} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'relative');
  });
});
