## Issue
https://github.com/evanw/esbuild/issues/1932

When using the Transform API with the following configuration, passing in a `filePath` that ends in `.mts` vs `.ts` seems to yield different code:
```
{
	target: 'node12',
	format: 'cjs',
	loader: 'ts',
	sourcefile: filePath,
}
```

Specifically, when the file ends in `.mts`, `1` is passed into the `isNodeMode` parameter in `__toESM` .

This is problematic when independently transforming two files where one imports the other. The imported module appears to get wrapped in another `{ default: ... }` object.

## Reproduction steps
1. Install appropriate Node.js version with [nvm](http://nvm.sh/):
	```
	nvm i
	```

2. Install dependencies:
	```sh
	npx ci
	```

3. Run command:
	```sh
	npm start
	```