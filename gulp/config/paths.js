module.exports = {
  src: "src/**/*",
  tmp: "tmp",
  dist: "dist",
  templates: {
    srcHtml: "src/pug/**/*.pug",
    tmpHtml: "tmp/index.html",
    distHtml: "dist/index.html",
  },
  styles: {
    srcStyle: "src/scss/**/*.scss",
    tmpStyle: "tmp/css",
    distStyle: "dist/css",
    injectTmpStyle: "tmp/css/*.css",
    injectDistStyle: "dist/css/*.min.css",
  },
  scripts: {
    srcJS: "src/script/**/*.js",
    tmpJS: "tmp/js/",
    distJS: "dist/js/",
    injectTmpJs: "tmp/js/*.js",
    injectDistJs: "dist/js/*.min.js",
  },
  images: {
    srcImages: "src/images/**/*.{svg,jpg,png}",
    tmpImages: "tmp/images/",
    distImages: "dist/images/",
  },
};
