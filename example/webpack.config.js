const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const dedupePlugin = new webpack.optimize.DedupePlugin();
const extractCSS = new ExtractTextPlugin("[name].css");

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.json?$/,
        loader: 'json-loader',
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
  },
  plugins: [dedupePlugin, extractCSS],
};
