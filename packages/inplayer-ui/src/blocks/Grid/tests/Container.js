import React from 'packages/inplayer-ui/src/blocks/Grid/tests/react';
import { renderWithTheme } from 'packages/inplayer-ui/src/blocks/Grid/tests/helpers';
import Container from '../Container';
import 'packages/inplayer-ui/src/blocks/Grid/tests/jest-styled-components';

describe('Grid.Container Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
