## Issue
https://github.com/egoist/esbuild-register/issues/39

When importing the latest `tempy`, it fails as it uses the new `node:` protocol:

```
Error: Cannot find module 'node:fs'
Require stack:
- /node_modules/.pnpm/tempy@2.0.0/node_modules/tempy/index.js
- /src/cli.ts
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/node_modules/.pnpm/tempy@2.0.0/node_modules/tempy/index.js:1:42)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at extensions..js (/node_modules/.pnpm/esbuild-register@3.0.0_esbuild@0.13.12/node_modules/esbuild-register/dist/node.js:2703:15)
    at Object.newLoader [as .js] (/node_modules/.pnpm/esbuild-register@3.0.0_esbuild@0.13.12/node_modules/esbuild-register/dist/node.js:2262:9)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/node_modules/.pnpm/tempy@2.0.0/node_modules/tempy/index.js',
    '/src/cli.ts'
  ]
```

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