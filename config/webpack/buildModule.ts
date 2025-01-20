import MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as webpack from "webpack";

export const module: webpack.ModuleOptions = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      use: [
        // "style-loader",
        // hear we will use mini css extract plugin instead of style loader, but of course we could use style loader too
        MiniCssExtractPlugin.loader,
        "css-loader",
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
  ],
};
