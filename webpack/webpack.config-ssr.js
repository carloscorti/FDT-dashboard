const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    App: './lib/client/App.js',
  },

  output: {
    path: path.resolve(__dirname, '../', 'public', 'ssr'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        loader: 'ignore-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/transform-runtime'],
        },
      },
    ],
  },
};
