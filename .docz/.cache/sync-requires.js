const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/srdjanrakic/Repos/inplayer-ui/.docz/.cache/dev-404-page.js"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/srdjanrakic/Repos/inplayer-ui/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/srdjanrakic/Repos/inplayer-ui/.docz/src/pages/404.js")))
}

