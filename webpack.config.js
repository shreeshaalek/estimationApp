var HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack');
module.exports = {
    entry: "./ui/index.js",
    output: {
      filename: "bundle.js"
    },
    module :{
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
            plugins: [
                ["transform-class-properties", { "spec": true }]
            ]
          }
        }
      ]
    },
    optimization: {
      minimize: false
    },
    plugins: [new HtmlWebpackPlugin({
      hash: false,
      template: 'index.html'
    })
  ]
}
 