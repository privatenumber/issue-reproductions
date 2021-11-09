const assert = require('assert');
const { RawSource, SourceMapSource } = require('webpack-sources');
const { version } = require('../package');

const isJsFile = /\.js$/i;
const pluginName = 'esbuild-minify';

const flatMap = (array, callback) => {
	assert(Array.isArray(array), 'arr is not an Array');
	return array.flatMap ? array.flatMap(callback) : array.flatMap(callback);
};

class ESBuildMinifyPlugin {
	constructor(options) {
		this.options = { ...options };

		const hasMinify = Object.keys(this.options).some(k => k.startsWith('minify'));
		if (!hasMinify) {
			this.options.minify = true;
		}
	}

	/**
   * @param {import('webpack').Compiler} compiler
   */
	apply(compiler) {
		compiler.hooks.compilation.tap(pluginName, (compilation) => {
			if (!compiler.$esbuildService) {
				throw new Error(
					'[esbuild-loader] You need to add ESBuildPlugin to your webpack config first',
				);
			}

			const meta = JSON.stringify({
				name: 'esbuild-loader',
				version,
				options: this.options,
			});
			compilation.hooks.chunkHash.tap(pluginName, (chunk, hash) => hash.update(meta));

			// Webpack 4
			compilation.hooks.optimizeChunkAssets.tapPromise(
				pluginName,
				async chunks => this.transformAssets(
					compilation,
					flatMap(chunks, chunk => chunk.files),
				),
			);
		});
	}

	async transformAssets(compilation, assetNames) {
		const {
			options: { devtool },
			$esbuildService,
		} = compilation.compiler;

		const sourcemap = (
			this.options.sourcemap === undefined
				? devtool && devtool.includes('source-map')
				: this.options.sourcemap
		);

		const transforms = assetNames
			.filter(assetName => isJsFile.test(assetName))
			.map(assetName => [assetName, compilation.getAsset(assetName)])
			.map(async ([assetName, { info, source: assetSource }]) => {
				const { source, map } = assetSource.sourceAndMap();
				const result = await $esbuildService.transform(source, {
					...this.options,
					sourcemap,
					sourcefile: assetName,
				});

				compilation.updateAsset(
					assetName,
					sourcemap
						? new SourceMapSource(
							result.js || '',
							assetName,
							result.jsSourceMap,
							source,
							map,
							true,
						)
						: new RawSource(result.js || ''),
					{
						...info,
						minimized: true,
					},
				);
			});
		if (transforms.length > 0) {
			await Promise.all(transforms);
		}
	}
}

module.exports = ESBuildMinifyPlugin;
