var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	 hot: true,
	 proxy:{
	    "http://www.gaorui.com": "http://localhost:9090"
	  },
});
server.listen(9090);