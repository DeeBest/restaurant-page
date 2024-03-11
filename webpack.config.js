const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:ico|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: path.resolve(__dirname, './src/Assets/favicon.png'),
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: 'src/Assets', to: 'Assets'},
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'cheap-module-source-map',
};