var webpack = require('webpack');
var path = require('path'); 
module.exports = {
	entry: path.resolve('./src/app.js'),
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js'
	}
}