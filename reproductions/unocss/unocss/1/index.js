import { createGenerator, presetUno } from 'unocss';
import { transformDirectives } from '@unocss/transformer-directives';
import MagicString from 'magic-string-extra';
import prettier from 'prettier/standalone.js';
import parserCSS from 'prettier/parser-postcss.js';

const uno = createGenerator({
	presets: [
		presetUno(),
	],
});

async function transform(code) {
	const s = new MagicString(code);
	await transformDirectives(s, uno);
	return prettier.format(s.toString(), {
		parser: 'css',
		plugins: [parserCSS],
	});
}

const output = await transform(`
.some-class {
	@apply sm:hover:bg-black;
}
`);

console.log('output', output);
