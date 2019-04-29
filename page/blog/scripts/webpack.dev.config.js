const webpack = require('webpack');
const config = require('./webpack.common.config');
config.devServer = {
  hot: true,
  publicPath: '/dist/'
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;