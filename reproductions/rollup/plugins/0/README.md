## Issue


### Input

_index.js_
```js
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
	console.log('production');
}
```


### Output
```js
if (typeof process !== 'undefined' && "production" === 'production') {
	console.log('production');
}
```

## Expected
[`@rollup/plugin-replace` README](https://github.com/rollup/plugins/tree/1f0e2cd/packages/replace#objectguards) says the output should be:

```js
if ('object' !== 'undefined' && 'production' === 'production') {
  console.log('production');
}
```

## Other info
There is no regression. Looks like the feature was merged when it was not working: https://github.com/rollup/plugins/pull/1084#discussion_r861447543


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
