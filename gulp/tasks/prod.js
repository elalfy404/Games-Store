const { series, task } = require('gulp')
const { cleanup } = require('./cleanup')
const { build } = require('./build')
const { starterMsg } = require('./messages')


const prod = task('prod', series(starterMsg, cleanup, build))

module.exports = {
    prod
}