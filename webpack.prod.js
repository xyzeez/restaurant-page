const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name]-[contenthash].bundle.js',
    assetModuleFilename: 'images/[name]-[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name]-[contenthash].css' }),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
