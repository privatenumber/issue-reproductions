const path = require('path');
const ESBuildPlugin = require('./esbuild-minify/plugin');
const ESBuildMinifyPlugin = require('./esbuild-minify/minify-plugin');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		path: path.resolve('dist'),
		libraryTarget: 'umd', // removing this fixes it
	},

	devtool: 'source-map',

	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin(),
		],
	},

	plugins: [
		new ESBuildPlugin(),
	],
};
