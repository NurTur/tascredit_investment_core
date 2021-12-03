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

const apiUrl = require("./apiUrl.js");

module.exports = {
  entry: APP_DIR + "/index.js",
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
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "public": path.resolve(__dirname, "../public"),
      
    },
    extensions: [".jsx", ".js", ".json", ".css"],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 7070,
    headers: {
      "X-Frame-Options": "Deny",
    },
  },

  plugins: [
    ESLintPlugin,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "INVESTMENTCore",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};
