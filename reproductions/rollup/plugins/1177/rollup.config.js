import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
	input: 'src/index.js',
	plugins: [
		commonjs(),
	],
	output: {
		dir: 'dist',
	},
});
