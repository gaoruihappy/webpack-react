var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require('./webpack.config');
var app = new (require('express'))()
var port = 3000;
var express = require('express');
app.use(express.static('dist'));
// var compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//     noInfo:true,
//     publicPath: config.output.publicPath
// }));
// app.use(webpackHotMiddleware(compiler);
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
})
app.get('/msg',function(req,res){
	res.send({error:0,data:{
		list:[{
			text:1
		}
		]
	}})
})
app.get('/dist/bundle',function(req,res){
	res.sendFile(__dirname + './dist/bundle.js');
})
app.listen(port, function(error){
	if(error){
		console.error(error)
	}else {
		console.info("==> Listening on port %s. Open up http://localhost:%s in your brower.",port,port);
	}
})