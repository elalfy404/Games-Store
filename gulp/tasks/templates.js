const { src, dest } = require("gulp");
const { templates, tmp, dist } = require("../config/paths");
const pug = require("gulp-pug");
const { pugConfig } = require('../config/pluginsConfig')
const plumber = require('gulp-plumber')
const { plumberConfig } = require('../config/pluginsConfig')
const gulpif = require('gulp-if')
const gutil = require('gulp-util');
const { isDev } = require('../utils/env')
const notify = require('gulp-notify')


const html = done => {
    src(templates.srcHtml)
        .pipe(plumber(plumberConfig))
        .pipe(pug(pugConfig))
        .pipe(
            notify({
                massage: gutil.colors.green('✔️ templates files were successfully compiled @ <%= options.date %>'),
                templateOptions: {
                    date: new Date().toLocaleString()
                }
            }))
        .pipe(gulpif(isDev, dest(tmp), dest(dist)));
    done();
};

module.exports = {
    html,
};