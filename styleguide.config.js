const path = require('path');
const theme = require('./src/config/theme');
const colors = require('./src/config/colors');
const { version } = require('./package.json');

const fontSource = 'https://fonts.googleapis.com/css?family=Roboto:300,400,600,700';

module.exports = {
  title: `InPlayer UI | ${version}`,
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/ThemeWrapper'),
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
      link: colors.deepSkyBlue,
      linkHover: colors.skyBlue,
    },
    fontFamily: {
      base: theme.font.primary,
    },
  },
  styles: {
    StyleGuide: {
      sidebar: {
        width: 240,
      },
      hasSidebar: {
        paddingLeft: 240,
      },
    },
    SectionHeading: {
      sectionName: {
        color: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
      },
    },
    Heading: {
      heading1: {
        color: colors.deepSkyBlue,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        margin: '0.7em 0',
      },
      heading2: {
        fontWeight: 500,
        fontSize: '1.75rem',
        margin: '2rem 0 0.5rem',
      },
      heading3: {
        fontWeight: 500,
        fontSize: '1.25rem',
        margin: '2rem 0 1.25rem',
      },
    },
  },
};
