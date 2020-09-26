const { tmp, dist } = require("./paths");
const pugConfig = { pretty: true };
const babelConfig = { presets: ["@babel/preset-env"] };
const { errorHandler } = require("../utils/errorHandler");
const delConfig = [tmp, dist];
const plumberConfig = errorHandler;
const browserSyncConfig = {
  server: {
    baseDir: tmp,
  },
};

module.exports = {
  pugConfig,
  babelConfig,
  delConfig,
  plumberConfig,
  browserSyncConfig,
};
