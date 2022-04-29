# 🐞🐛🐜 Issue reproductions

A repository to collect and organize my issue reproductions.

## Why?
Because it's important to provide reproduction when reporting bugs 🪲

Notable benefits:
- 🏆 Organize and showcase the bugs I've found!
- ⚡️ Create a streamlined reproduction environment for myself
- ❤️ Teach, encourage, & exemplify making minimal reproductions

## Usage
- Each reproduction should be organized in the directory structure:
    ```sh
    /reproductions/<repo-owner>/<repo-name>/<issue-number>/
    ```
    eg. `/reproductions/privatenumber/esbuild-loader/11`

- Each reproduction should contain a `README.md` documenting the bug and link to the issue
- Command to trigger reproduction should be in `npm start`, otherwise, documented in a `README.md` file
- Node version should be in a `.nvmrc` file so it can be accessed immediately with [`nvm i`](http://nvm.sh/)


## Bug index
<!-- bugIndex:start -->
- [egoist/esbuild-register](https://github.com/egoist/esbuild-register) • [Issue #39](https://github.com/egoist/esbuild-register/issues/39) — [Reproduction](reproductions/egoist/esbuild-register/39)
- [egoist/rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild) • [Issue #317](https://github.com/egoist/rollup-plugin-esbuild/issues/317) — [Reproduction](reproductions/egoist/rollup-plugin-esbuild/317)
- [rollup/plugins](https://github.com/rollup/plugins) • [Issue #0](https://github.com/rollup/plugins/issues/0) — [Reproduction](reproductions/rollup/plugins/0)
- [rollup/plugins](https://github.com/rollup/plugins) • [Issue #1177](https://github.com/rollup/plugins/issues/1177) — [Reproduction](reproductions/rollup/plugins/1177)
- [unocss/unocss](https://github.com/unocss/unocss) • [Issue #1](https://github.com/unocss/unocss/issues/1) — [Reproduction](reproductions/unocss/unocss/1)
- [vuejs/vitepress](https://github.com/vuejs/vitepress) • [Issue #587](https://github.com/vuejs/vitepress/issues/587) — [Reproduction](reproductions/vuejs/vitepress/587)
- [vuejs/vue](https://github.com/vuejs/vue) • [Issue #11533](https://github.com/vuejs/vue/issues/11533) — [Reproduction](reproductions/vuejs/vue/11533)
- [webpack/webpack-sources](https://github.com/webpack/webpack-sources) • [Issue #90](https://github.com/webpack/webpack-sources/issues/90) — [Reproduction](reproductions/webpack/webpack-sources/90)
<!-- bugIndex:end -->
