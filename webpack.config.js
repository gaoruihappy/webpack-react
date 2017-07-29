var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src4',
  output: {
    filename: 'bundle.js',
    // publicPath:"/assets/",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
          loaders: [{
            test: /\.js$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                    "presets": ['es2015', 'react',"stage-2"]
                }
          },
          // { test: /\.less$/, loader: "style-loader!css-loader" },
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
  },
  plugins: [
        // new HtmlWebpackPlugin(), // Generates default index.html 
        // new HtmlWebpackPlugin({  // Also generate a test.html 
        //   filename: 'test.html',
        //   template: 'src4/index.html'
        // }),
         new HtmlWebpackPlugin({  // Also generate a test.html 
          filename: 'index.html',
          title: 'Custom template',
          template: 'my-index.ejs', 
        }),
         new ExtractTextPlugin("styles.css"),
    ]
};