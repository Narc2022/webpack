const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.export = {
    entry:path.resolve(__dirname,'..','./src/index.js'),
    resolve: {
        extensions: ['.jsx','.js'],
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      mode: 'production',
      module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
      },
      plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}