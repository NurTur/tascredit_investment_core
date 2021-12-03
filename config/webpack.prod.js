const path = require("path");
const loader = require("./addons/loaders");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apiUrl = require("./apiUrl.js");

module.exports = {
  mode: "production",

  module: {
    rules: [loader.StyleLoader],
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `yarn.${packageName.replace("@", "")}`;
          },
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`,
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./addons/.env.production"),
    }),
  ],

  externals: {
    config: JSON.stringify({
      apiUrl: apiUrl.API_URL_PROD
    }),
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
  },

  devtool: "source-map",
};
