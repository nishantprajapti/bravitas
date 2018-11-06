var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: ["./client/index.js","./client/scss/main.scss"],
  output: {
    path: path.join(__dirname, 'bin'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ["css-loader",'sass-loader'],
          publicPath: "../"
        })
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
       {from:'client/images',to:'./images'} 
    ]), 
    new ExtractTextPlugin({
      filename: "./css/[name].css",
      disable: false,
      allChunks: true
    }), 
    new HtmlWebpackPlugin({
      title:'Bravitaz',
      template:'./client/index.html'
    })
  ]
}
