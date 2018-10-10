import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from '../../config/theme';
import 'jest-styled-components';

export function renderWithTheme(component) {
  return renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export function generateSnapshots(Component, props = {}) {
  describe(`${Component.displayName}`, () => {
    it('renders correctly', () => {
      const tree = renderWithTheme(<Component {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    if (Component.modifiers) {
      const modifiers = Object.keys(Component.modifiers);
      modifiers.forEach(mod => {
        it(`should apply ${mod} modifier`, () => {
          const tree = renderWithTheme(<Component {...props} modifiers={[mod]} />).toJSON();
          expect(tree).toMatchSnapshot();
        });
      });
    }
  });
}

export function shallowWithTheme(tree) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
}

export function mountWithTheme(tree) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes, // Needed so child components receive the theme prop
  });
}
