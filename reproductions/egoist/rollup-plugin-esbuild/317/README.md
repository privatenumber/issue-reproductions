## Issue
https://github.com/egoist/rollup-plugin-esbuild/issues/317

When minifying a distribution targeted at CJS, it doesn't minify top-level variables. This is happening because `format` is not passed in to transform so it assumes "script" mode:
https://github.com/egoist/rollup-plugin-esbuild/blob/883971358efc30d7cc96d2e4606754091ec103d8/src/index.ts#L194


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

## Expectation
The output looks like this:
```js
"use strict";var path=require("path");function _interopDefaultLegacy(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var path__default=_interopDefaultLegacy(path);console.log(path__default.default.resolve("."));
```

Top-level variables (eg. `path`) should be mangled.
