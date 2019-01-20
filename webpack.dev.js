const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }],
  },
});
