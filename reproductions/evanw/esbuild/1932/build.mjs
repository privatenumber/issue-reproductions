import { transform } from 'esbuild';
import fs from 'fs/promises';

(async () => {
	await fs.mkdir('./dist', { recursive: true });
	await Promise.all(
		[
			'index.mts',
			'esm.mts',
		].map(async (filePath) => {
			const fileSource = await fs.readFile('./src/' + filePath, 'utf8');
			const transformed = await transform(fileSource, {
				format: 'cjs',
				sourcefile: filePath, // .replace('.mts', '.ts'), // Comment out to make it work expectedly
			});

			await fs.writeFile(
				'./dist/' + filePath.replace('.mts', '.js'),
				transformed.code,
			);
		}),
	);
})();
