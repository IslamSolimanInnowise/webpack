import * as path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { plugins } from "./config/webpack/buildPlugins";
import { module } from "./config/webpack/buildModule";

type Mode = "development" | "production";

interface EnvVariables {
  mode: Mode;
}

// export default (env: EnvVariables) => {
//   const config: webpack.Configuration = {
//     // mode: "development",
//     // mode: "production",

//     mode: env.mode ?? "production",
//     watch: true,
//     //   entry: {
//     //     file1: path.resolve(__dirname, "src", "index.js"),
//     //     file2: path.resolve(__dirname, "src", "count.js"),
//     //   },
//     entry: path.resolve(__dirname, "src", "index.tsx"),
//     output: {
//       path: path.resolve(__dirname, "build"),
//       filename: "[bundle].[contenthash].js", // [contenthash] is used to generate a unique hash for the file
//       clean: true,
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, "public", "index.html"),
//       }),
//       new MiniCssExtractPlugin(),
//       // progress plugin is very slow so i'll comment it out
//       // new webpack.ProgressPlugin(),
//     ],
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: "ts-loader",
//           exclude: /node_modules/,
//         },
//         {
//           test: /\.css$/i,
//           use: [
//             // "style-loader",
//             // hear we will use mini css extract plugin instead of style loader, but of course we could use style loader too
//             MiniCssExtractPlugin.loader,
//             "css-loader",
//           ],
//         },
//         {
//           test: /\.s[ac]ss$/i,
//           use: [
//             // Creates `style` nodes from JS strings
//             "style-loader",
//             // Translates CSS into CommonJS
//             "css-loader",
//             // Compiles Sass to CSS
//             "sass-loader",
//           ],
//         },
//       ],
//     },
//     resolve: {
//       extensions: [".tsx", ".ts", ".js"],
//     },
//   };

//   return config;
// };

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? "production",
    watch: true,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[bundle].[contenthash].js",
      clean: true,
    },
    plugins,
    module,
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
