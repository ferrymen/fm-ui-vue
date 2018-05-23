const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'] // Must include `.js`, otherwise throw error
  },
  module: {
    rules: [
      // This will apply to both plain `.css` files
      // and `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract(['css-loader'])
      },
      // This will apply to both plain `.js` files
      // and `<script>` blocks in `.vue` files
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    open: true
  },
  plugins: [
    // new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.tpl.html',
      filename: 'index.html',
    }),
    new ExtractTextWebpackPlugin('style.css')
  ]
}