const path = require("path");
const loader = require("./addons/loaders");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  module: {
    rules: [
      loader.StyleLoader
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`,
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./addons/.env.development"),
    }),
  ],

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
  },

  externals: {
    config: JSON.stringify({
      apiUrl: apiUrl.API_URL_DEV
    }),
  },

  devtool: "eval-source-map",
};
