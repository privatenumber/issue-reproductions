## Issue

https://github.com/nodejs/node/issues/44316

Setting `null` on an export path can be used to exclude private directories from being exposed ([Node.js docs](https://nodejs.org/api/packages.html#subpath-patterns:~:text=To%20exclude%20private%20subfolders%20from%20patterns%2C%20null%20targets%20can%20be%20used%3A)):

```json5
// ./node_modules/package/package.json
{
    "exports": {
        "./*": "./*",
        "./internal/*": null
    }
}
```

Although this works to prevent an import like this:
```ts
import 'package/internal/file.js'
```

It can be circumvented by using multiple slashes:
```ts
import 'package//internal/file.js'
```

In UNIX, multiple consecutive slashes are [treated as a single slash](https://unix.stackexchange.com/questions/11964/what-do-double-slashes-mean-in-unix-path-is-cd-dir-subdir-valid#:~:text=Actually%20it%20means%20nothing%20and,be%20ignored%20by%20most%20programs.).


## Reproduction steps
1. Install appropriate Node.js version with [nvm](http://nvm.sh/):
	```
	nvm i
	```

2. Run command:
	```sh
	npm start
	```