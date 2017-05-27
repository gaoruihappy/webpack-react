var path = require('path');

module.exports = {
  entry: './src1',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
          loaders: [{
            test: /\.js?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          { test: /\.css$/, loader: "style-loader!css-loader" }]
     }
};