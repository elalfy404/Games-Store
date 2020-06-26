const { src, dest } = require('gulp')
const sass = require('gulp-sass');
sass.compiler = require('node-sass')
const { styles } = require('../config/paths')
const plumber = require('gulp-plumber')
const { plumberConfig } = require('../config/pluginsConfig')
const gutil = require("gulp-util")
const notify = require("gulp-notify")
const browserSync = require('browser-sync').create()
const gulpif = require("gulp-if")
const { isDev } = require("../utils/env")
const cleanCSS = require("gulp-clean-css")
const concat = require('gulp-concat')

const css = done => {
    
        src(styles.srcStyle)
            .pipe(plumber(plumberConfig))
            .pipe(sass())
            .pipe(
                notify({
                    message: gutil.colors.green(
                        "✔️  style files were successfully compiled @ <%= options.date %>"
                    ),
                    templateOptions: {
                        date: new Date().toLocaleString()
                    }
                }),
                gutil.colors.green(
                    "✔️  style files were successfully compiled @ <%= options.date %>"
                )
            )
            .pipe(gulpif(!isDev, cleanCSS()))
            .pipe(gulpif(!isDev, concat("main.min.css"), concat("main.css")))
            .pipe(gulpif(isDev, dest(styles.tmpStyle), dest(styles.distStyle)))
            .pipe(browserSync.stream())
            
        done()
    }

module.exports = {
    css
} 