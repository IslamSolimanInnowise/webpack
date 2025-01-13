import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

export default (env: { mode: "development" | "production" }) => {
  const config: webpack.Configuration = {
    // mode: "development",
    // mode: "production",

    mode: env.mode ?? "development",
    //   entry: {
    //     file1: path.resolve(__dirname, "src", "index.js"),
    //     file2: path.resolve(__dirname, "src", "count.js"),
    //   },
    entry: path.resolve(__dirname, "src", "index.ts"),
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
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
