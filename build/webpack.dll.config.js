const path = require('path')
const pkg = require('../package.json')
const webpack = require('webpack')

const vendorPackages = Object.keys(pkg.dependencies)

const config = {
  entry: {
    vendor: vendorPackages
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, '../static/js'),
    library: '[name]'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[hash]",
      path: path.join(__dirname, '../[name].manifest.json'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      cache: true,
      parallel: true
    }),
  ]
}

module.exports = config
