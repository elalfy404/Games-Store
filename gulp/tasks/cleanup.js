const del = require("del");
const { delConfig } = require("../config/pluginsConfig");
const notifier = require("node-notifier");
const gutil = require("gulp-util");

const cleanup = async (done) => {
  const deletedDirectoryPaths = await del(delConfig);
  notifier.notify("Folders were successfully deleted ✔️");
  gutil.log(
    gutil.colors.bgRed("⚠️ Directories that would be deleted:\n"),
    "✔️ ",
    gutil.colors.red(deletedDirectoryPaths.join("\n"))
  );
  done();
};

module.exports = {
  cleanup,
};
