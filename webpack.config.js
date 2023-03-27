const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Express Shina',
      filename: 'index.html',
      template: 'src/template.html',
    })
  ]
};