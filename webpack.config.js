/* eslint-disable prefer-template */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    react: [
      './src/react/index.jsx',
    ],
    angular2: [
      './src/angular2/main.ts',
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
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
    new HtmlWebpackPlugin({
      filename: 'angular2-index.html',
      title: 'Angular 2 Todo App',
      template: './src/angular2/index.ejs',
      inject: false,
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
