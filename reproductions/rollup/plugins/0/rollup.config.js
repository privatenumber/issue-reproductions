import { defineConfig } from 'rollup';
import replace from '@rollup/plugin-replace';

export default defineConfig({
	input: 'src/index.js',
	plugins: [
		replace({
			objectGuards: true,
			preventAssignment: true,
			values: {
				'process.env.NODE_ENV': '"production"'
			},
		}),
	],
	output: {
		dir: 'dist',
	},
});
