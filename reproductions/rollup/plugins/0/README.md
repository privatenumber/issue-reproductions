## Issue


### Input

_index.js_
```js
if (process.env.NODE_ENV === 'production') {
	require('./prod.js');
}
```

_prod.js_
```js
console.log('side effect');

export default 'production';
```

### Output
```js
var src = {};

console.log('side effect');

if (process.env.NODE_ENV === 'production') ;

export { src as default };
```

## Expected
For the `console.log('side effect');` to be delayed until the if-condition passes.

Note, this only happens because _prod.js_ is an ESM file. If the `export ...` is removed for it to be interpreted as a CJS file, it will compile expectedly:

```js
var src = {};

var prod = {};

var hasRequiredProd;

function requireProd () {
	if (hasRequiredProd) return prod;
	hasRequiredProd = 1;
	console.log('side effect');

	// export default 'production';
	return prod;
}

if (process.env.NODE_ENV === 'production') {
	requireProd();
}

export { src as default };
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
