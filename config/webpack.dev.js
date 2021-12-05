const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apiUrl = require("./apiUrl.js");

module.exports = {
  mode: "development",

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./addons/.env.development"),
    }),
  ],

  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].js",
  },

  externals: {
    config: JSON.stringify({
      apiUrl: apiUrl.API_URL_DEV
    }),
  },

  devtool: "eval-source-map",
};
