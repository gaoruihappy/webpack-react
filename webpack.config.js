var path = require('path');

module.exports = {
  entry: './src2',
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
                    "presets": ['es2015', 'react']
                }
          },
          { test: /\.css$/, loader: "style-loader!css-loader" }]
     },
};