# Issue

https://github.com/vuejs/vitepress/issues/587

When using [`base`](https://vitepress.vuejs.org/config/basics.html#base), `route.path` is different across client and server.

For example, when using base `/base/` and logging `route.path`, `vitepress build` will log `/index.html`, but when visited in the browser, it logs `/base/index.html`.

## Expected behavior

For `route.path` to be consistent across server and client.


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

- Notice `/index.html` get logged on the server side
- Notice `/base/index.html` get logged on the client side
