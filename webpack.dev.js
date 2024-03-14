const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    watchFiles: ['./src'],
  },
  output: {
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[name][ext]',
  },
  plugins: [new MiniCssExtractPlugin()],
});
