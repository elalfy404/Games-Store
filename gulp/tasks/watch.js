const { watch, series } = require('gulp')
const { styles, templates, scripts } = require('../config/paths')
const { html } = require('./templates')
const { css } = require('./style')
const { js } = require('./scripts')
const { reload } = require('./server')

const watcher = done => {
    watch(templates.srcHtml, series(html, reload))
    watch(styles.srcStyle, series(css, reload))
    watch(scripts.srcJS, series(js, reload))
    done()
}

module.exports = {
    watcher
}