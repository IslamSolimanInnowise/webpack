import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
  }),
  new MiniCssExtractPlugin(),
  // progress plugin is very slow so i'll comment it out
  //   new webpack.ProgressPlugin(),
];
