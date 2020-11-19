const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

// Set the mode to development or production
const mode = 'development'

const output = { publicPath: 'http://localhost:3004/' }

// Control how source maps are generated
const devtool = 'inline-source-map'

// Spin up a server for quick development
const port = 8080
const contentBase = paths.build
const devServer = {
  port,
  contentBase,
  open: true,
  compress: true,
  hot: true,
  historyApiFallback: true
}

// Only update what has changed on hot reload
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()

const plugins = [hotModuleReplacementPlugin]

// module exports
module.exports = merge(common, { mode, output, devtool, devServer, plugins })
