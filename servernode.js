var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot               : true,//注意这里，你已经开启了hot模式，她和你手动加载HotModuleReplacementPlugin是一个意思，所有你后面再手动加一个就没意义了
    noInfo            : true,
    historyApiFallback: true,
    inline:    true        

});
server.listen(8080,'127.0.0.1');