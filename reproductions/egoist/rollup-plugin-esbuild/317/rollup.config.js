import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

const rollupConfig = defineConfig({
	input: 'src/index.js',
	plugins: [
		esbuild({
			minify: true,
		}),
	],
	external: ['path'],
	output: {
		format: 'cjs',
		file: 'dist/index.js',
	},
});

export default rollupConfig;
