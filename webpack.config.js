var path = require('path')
var fs =   require('fs')
module.exports = function(webpackConfig){
    webpackConfig.resolve.alias['containers'] = path.resolve(__dirname, "src/containers");
    return webpackConfig
}