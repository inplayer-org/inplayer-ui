const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/@inplayer-org/inplayer-ui/',

  siteMetadata: {
    title: 'InPlayer UI',
    description: 'InPlayer React UI Components',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: false,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/srdjanrakic/Repos/inplayer-ui/.docz',
        base: '/@inplayer-org/inplayer-ui/',
        source: './',
        src: './src',
        files: '*.{mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'InPlayer UI',
        description: 'InPlayer React UI Components',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/srdjanrakic/Repos/inplayer-ui',
          templates:
            '/Users/srdjanrakic/Repos/inplayer-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/srdjanrakic/Repos/inplayer-ui/.docz',
          cache: '/Users/srdjanrakic/Repos/inplayer-ui/.docz/.cache',
          app: '/Users/srdjanrakic/Repos/inplayer-ui/.docz/app',
          appPackageJson: '/Users/srdjanrakic/Repos/inplayer-ui/package.json',
          gatsbyConfig: '/Users/srdjanrakic/Repos/inplayer-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/srdjanrakic/Repos/inplayer-ui/gatsby-browser.js',
          gatsbyNode: '/Users/srdjanrakic/Repos/inplayer-ui/gatsby-node.js',
          gatsbySSR: '/Users/srdjanrakic/Repos/inplayer-ui/gatsby-ssr.js',
          importsJs:
            '/Users/srdjanrakic/Repos/inplayer-ui/.docz/app/imports.js',
          rootJs: '/Users/srdjanrakic/Repos/inplayer-ui/.docz/app/root.jsx',
          indexJs: '/Users/srdjanrakic/Repos/inplayer-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/srdjanrakic/Repos/inplayer-ui/.docz/app/index.html',
          db: '/Users/srdjanrakic/Repos/inplayer-ui/.docz/app/db.json',
        },
        version: '2.0.0-beta.30',
        hashRouter: true,
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
