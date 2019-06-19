var path = require('path');
var rootPath = path.resolve(__dirname)

module.exports = {
	entry: './src/index.js',
	output: {
		path: rootPath + '/build',
		filename: '[name].js'
	},
	module: {
		rules: [
      { test: /\.js$/, exclude: /node_modules/, include: [ path.join(__dirname, 'src') ], loader: "babel-loader" }
		]
	}
}
