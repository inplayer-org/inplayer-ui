import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row';
import 'jest-styled-components';

describe('Grid.Row Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the correct style with the `position` modifier', () => {
    const tree = renderer.create(<Row modifiers={['positionRelative']} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'relative');
  });
});
