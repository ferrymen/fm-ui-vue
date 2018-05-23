const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // This will apply to both plain `.css` files
      // and `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract(['css-loader'])
      },
      // This will apply to both plain `.js` files
      // and `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    open: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.tpl.html',
      filename: 'index.html',
    }),
    new ExtractTextWebpackPlugin('style.css')
  ]
}