const path = require("path");
const loaders = require("./addons/loaders");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");
const PUB_DIR = path.resolve(__dirname, "../public");

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, "../.eslintrc.json"),
  context: path.resolve(__dirname, "../src/"),
  files: "**/*.jsx",
});

module.exports = {
  entry: APP_DIR + "/index.jsx",
  mode: "development",
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
      loaders.SVGLoader,
      loaders.FileLoader,
      loaders.SCSSLoader,
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 7070,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "public": path.resolve(__dirname, "../public"),
      
    },
    extensions: [".jsx", ".js", ".json", ".css"],
  },
  plugins: [
    ESLintPlugin,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "INVESTMENTCore",
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
};
