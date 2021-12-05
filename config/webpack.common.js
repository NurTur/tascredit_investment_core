const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");
const loaders = require("./addons/loaders");

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
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      loaders.JSLoader,
      loaders.FileLoader,
      //loaders.SCSSLoader,
      loaders.StyleLoader
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

  externals: {
    config: JSON.stringify({
      apiUrl: apiUrl.API_URL_DEV
    }),
  },

  plugins: [
    ESLintPlugin,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "INVESTMENTCore",
      favicon:path.resolve(__dirname, "../public/favicon.svg"),      
      filename:'index.html',
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};
