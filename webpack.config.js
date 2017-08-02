/* eslint-disable prefer-template */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    react: [
      './src/react/index.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js',
    hash: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'react-index.html',
      title: 'React Todo App',
      template: './src/react/index.ejs',
      inject: false,
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
