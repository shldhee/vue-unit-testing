module.exports = () => {
  return {
    files: ["./test/specs/**/*"],
    require: ["./test/_setup.js"],
    snapshotDir: "./test/snapshots/",
    ignoredByWatcher: ["!**/*.{js,vue}"],
    // tap: true,
    verbose: true,
    color: true,
    // babel: true,
  };
};
