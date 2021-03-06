const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config()

module.exports = {
	watch: true,
	entry: {
		index: './scripts/app/index.js',
		error: './scripts/error/index.js'		
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
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
		  "process.env": JSON.stringify(dotenv.parsed)
		}),
	],
};