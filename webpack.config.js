const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    // mode: "development",
    // mode: "production",
    mode: env.mode ?? "development",
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
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],
  };
};
