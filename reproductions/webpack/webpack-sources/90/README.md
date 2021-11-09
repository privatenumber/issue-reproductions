## Issue
https://github.com/webpack/webpack-sources/issues/90

Originally from: https://github.com/privatenumber/webpack-sources-bug-repro

## Reproduction steps
1. `npm ci`
2. `npm start`
3. See `Error: "." is not in the SourceMap`

Note that the bug is gone when removing `output.libraryTarget: 'umd'` from the Webpack config.


## Error output
```
➜  webpack-sources-repro git:(master) npm start

> webpack-sources-bug-repro@1.0.0 build /webpack-sources-repro
> webpack --config webpack.config

(node:95967) UnhandledPromiseRejectionWarning: Error: "." is not in the SourceMap.
    at BasicSourceMapConsumer.SourceMapConsumer_sourceContentFor [as sourceContentFor] (/webpack-sources-repro/node_modules/webpack-sources/node_modules/source-map/lib/source-map-consumer.js:753:13)
    at /webpack-sources-repro/node_modules/webpack-sources/lib/applySourceMap.js:144:46
    at SourceNode_walk [as walk] (/webpack-sources-repro/node_modules/webpack-sources/node_modules/source-map/lib/source-node.js:230:9)
    at SourceNode_walk [as walk] (/webpack-sources-repro/node_modules/webpack-sources/node_modules/source-map/lib/source-node.js:226:13)
    at applySourceMap (/webpack-sources-repro/node_modules/webpack-sources/lib/applySourceMap.js:58:13)
    at SourceMapSource.node (/webpack-sources-repro/node_modules/webpack-sources/lib/SourceMapSource.js:198:11)
    at exports.getSourceAndMap (/webpack-sources-repro/node_modules/webpack-sources/lib/helpers.js:17:21)
    at SourceMapSource.sourceAndMap (/webpack-sources-repro/node_modules/webpack-sources/lib/SourceMapSource.js:184:10)
    at getTaskForFile (/webpack-sources-repro/node_modules/webpack/lib/SourceMapDevToolPlugin.js:65:30)
    at /webpack-sources-repro/node_modules/webpack/lib/SourceMapDevToolPlugin.js:215:20
    at Array.forEach (<anonymous>)
    at /webpack-sources-repro/node_modules/webpack/lib/SourceMapDevToolPlugin.js:186:12
    at SyncHook.eval [as call] (eval at create (/webpack-sources-repro/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:5:1)
    at SyncHook.lazyCompileHook (/webpack-sources-repro/node_modules/tapable/lib/Hook.js:154:20)
    at /webpack-sources-repro/node_modules/webpack/lib/Compilation.js:1413:42
    at eval (eval at create (/webpack-sources-repro/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:11:1)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
(node:95967) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:95967) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

```