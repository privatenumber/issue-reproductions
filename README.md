# 🐞🐛🐜 Issue reproductions

A repository to collect and organize my issue reproductions.

## Why?
Because it's important to provide reproduction when reporting bugs 🪲

Other benefits:
- 🏆 To organize and showcase the bugs I've found!
- ⚡️ To create a streamlined reproduction environment for myself
- ❤️ To teach, encourage, & exemplify making minimal reproductions

## Usage
- Each reproduction should be organized in the directory structure:
	```
	/reproductions/<repo-owner>/<repo-name>/<issue-number>/
	```
	eg. `/reproductions/privatenumber/esbuild-loader/11`

- Each reproduction should contain a `README.md` documenting the bug and link to the issue
- Command to trigger reproduction should be in `npm start`, otherwise, documented in a `README.md` file
- Node version should be in a `.nvmrc` file so it can be accessed immediately with [`nvm i`](http://nvm.sh/)
