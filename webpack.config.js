const path = require("path");

module.exports = {
  //   mode: "development",
  mode: "production",
  //   entry: {
  //     file1: path.resolve(__dirname, "src", "index.js"),
  //     file2: path.resolve(__dirname, "src", "count.js"),
  //   },
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[bundle].[contenthash].js", // [contenthash] is used to generate a unique hash for the file
    clean: true,
  },
};
