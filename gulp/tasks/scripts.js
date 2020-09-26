const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const { scripts } = require("../config/paths");
const { babelConfig } = require("../config/pluginsConfig");
const plumber = require("gulp-plumber");
const { plumberConfig } = require("../config/pluginsConfig");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const notify = require("gulp-notify");
const gutil = require("gulp-util");
const gulpif = require("gulp-if");
const concat = require("gulp-concat");
const { isDev } = require("../utils/env");

const js = (done) => {
  src(scripts.srcJS)
    .pipe(plumber(plumberConfig))
    .pipe(babel(babelConfig))
    .pipe(
      notify({
        message: gutil.colors.green(
          "✔️  script files were successfully compiled @ <%= options.date %>"
        ),
        templateOptions: {
          date: new Date().toLocaleString(),
        },
      }),
      gutil.colors.green(
        "✔️  script files were successfully compiled @ <%= options.date %>"
      )
    )
    .pipe(gulpif(!isDev, uglify()))
    .pipe(gulpif(!isDev, concat("main.min.js"), concat("main.js")))
    .pipe(gulpif(isDev, dest(scripts.tmpJS), dest(scripts.distJS)))
    .pipe(browserSync.stream());

  done();
};

module.exports = {
  js,
};
