const { resolve } = require('path')

const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const webpackConfBase = require('./webpack.config.base')

const webpackConfDev = WebpackMerge(webpackConfBase, {
  mode: 'development',
  entry: './dev/main.tsx',
  output: {
    // path: resolve(__dirname, '../dist'),
    // filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      "@ferrymen/fm-vue": "../src"
    }
  },
  devServer: {
    // contentBase: resolve(__dirname, '../dist'),
    open: true
  },
  plugins: [
    // new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.tpl.html',
      filename: 'index.html',
    }),
    // new ExtractTextWebpackPlugin('style.css'),
    // new Webpack.WatchIgnorePlugin([
    //   /scss\.d\.ts$/
    // ])
  ]
})

// console.log(webpackConfDev)
module.exports = webpackConfDev
