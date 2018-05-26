const { resolve } = require('path')

const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    // path: resolve(__dirname, '../dist'),
    // filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // Must include `.js`, otherwise throw error
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            // options: { appendTsxSuffixTo: [/\.vue$/] }
          }
        ]
      },
      // This will apply to both plain `.css` files
      // and `<style>` blocks in `.vue` files
      {
        test: /\.scss$/,
        // loader: 'style-loader!css-loader!sass-loader'
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              minimize: true,
              localIdentName: "[local]_[hash:base64:5]"
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
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
}