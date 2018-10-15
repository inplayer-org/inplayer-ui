const path = require('path');
const theme = require('./config/theme');

const fontSource = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
  styleguideDir: 'docs',
  template: {
    lang: 'en',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: fontSource,
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
        },
      ],
    },
  },
  ignore: ['**/utils/**.js'],
  sections: [
    {
      name: 'Components',
      ignore: ['**/tests/**', '**/components/index.js'],
      components: 'src/components/**/index.js',
      description: 'Components are cool.',
    },
    {
      name: 'Blocks',
      ignore: ['**/tests/**', '**/blocks/index.js'],
      components: 'src/blocks/**/index.js',
      description:
        'Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept. They are responsible for providing the context for Elements, handling UI logic, and rendering the Elements within the Block. They are not connected to application state, nor do they handle any business logic.',
    },
    {
      name: 'Elements',
      ignore: ['**/tests/**', '**/elements/index.js'],
      components: 'src/elements/**/index.js',
      description:
        'Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the UI. They do not handle application logic or UI logic, but they do handle their own modifiers which modify the element’s style. Elements generally exist within the context of a Block (as their own file in the Block’s directory) allowing the reuse of that set of Elements, but they are not exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P. These common elements live in `src/elements`.',
    },
  ],
  theme: {
    color: {
      base: theme.colors.fontDarkGray,
      light: theme.colors.fontGray,
      lightest: theme.colors.fontLightGray,
      link: theme.colors.accentBlue,
      linkHover: theme.colors.accentDarkBlue,
      border: theme.colors.gray,
      name: theme.colors.green,
      type: theme.colors.pink,
      error: theme.colors.red,
      baseBackground: theme.colors.lightGray,
      codeBackground: theme.colors.coderBlue,
      sidebarBackground: theme.colors.gray,
    },
    fontFamily: {
      base: theme.font.primary,
    },
    fontSize: {
      base: 12,
      text: 16,
      small: 14,
      h1: 40,
      h2: 36,
      h3: 32,
      h4: 28,
      h5: 24,
      h6: 20,
    },
  },
};
