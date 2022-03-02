## Issue

https://github.com/unocss/unocss/issues/678

### Input
```css
.some-class {
	@apply sm:hover:bg-black;
}
```

### Output
```css
.some-class {
}

@media (min-width: 640px) {
  .some-class {
    --un-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--un-bg-opacity));
  }
}
```

However, when putting `sm:hover:bg-black` in a class, it works fine.

## Expected
For the output to only apply `bg-black` on `hover` given the screen is `sm`.


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
