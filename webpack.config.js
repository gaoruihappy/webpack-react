var path = require('path');

module.exports = {
  entry: './src4',
  output: {
    filename: 'bundle.js',
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
          { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
  },
  // plugins: [
  //   // OccurenceOrderPlugin is needed for webpack 1.x only 
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};