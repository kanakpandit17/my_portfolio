
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kanakpandit/Desktop/portfolio 2/portfoliow/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kanakpandit/Desktop/portfolio 2/portfoliow/src/pages/404.js")),
  "component---src-pages-archive-js": preferDefault(require("/Users/kanakpandit/Desktop/portfolio 2/portfoliow/src/pages/archive.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kanakpandit/Desktop/portfolio 2/portfoliow/src/pages/index.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/kanakpandit/Desktop/portfolio 2/portfoliow/src/templates/post.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/kanakpandit/Desktop/portfolio 2/portfoliow/src/templates/tag.js"))
}
