const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

const SCSSLoader = {
  test: /\.(scss|css)$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const FileLoader = {
  test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf|ico|webmanifest|svg)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        publicPath:'/',
        name: "[name].[ext]",
      },
    },
  ],
};

const StyleLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },

    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "./postcss.js"),
        },
      },
    },

    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
      },
    },
  ],
};

module.exports = {
  JSLoader: JSLoader,
  SCSSLoader: SCSSLoader,
  FileLoader: FileLoader,
  StyleLoader: StyleLoader,
};
