const path = require('path');

module.exports = {
	entry: {
		index: './scripts/index.js',
		error: './scripts/error.js'		
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js','.jsx','.css']
	},
	module: {
		rules:[
			{
				test: /\.(js|jsx)?/,
                exclude:/(node_modules)/,
                loader: 'babel-loader'
			}
		]
	}
};