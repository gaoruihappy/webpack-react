var entry = [
	'index.js'
]

var rs = {};
entry.forEach(function(item){
  rs[item] = './src/'+item
})

module.exports = rs;