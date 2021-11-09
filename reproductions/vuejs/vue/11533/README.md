## Issue

https://github.com/vuejs/vue/issues/11533

Originally from: https://github.com/privatenumber/vue-ssr-vhtml-dyncomp-bug

This repository reproduces a Vue SSR bug when using `v-html` on a component that has a root [dynamic-component](https://vuejs.org/v2/guide/components.html#Dynamic-Components) (eg. `<component />`). Although there isn't a discrepancy in rendered HTML between client and SSR, it gives warnings that there is.

The expected behavior is for there to be no hydration warning when the SSR and client markup are identical.


## Simple example

_Dynamic.vue_
```vue
<template>
  <component is="div">
    content necessary
  </component>
</template>

```

_App.vue_
```vue
<template>
  <dynamic v-html="'<div>trigger hydration warning</div>'" />
</template>

```

## Reproduction steps
1. Clone repo
2. Install deps `npm ci`
3. `npm start` to start server
4. Visting landing page and view Dev console

 
## Results

### D
[Code](https://github.com/privatenumber/vue-ssr-vhtml-dyncomp-bug/blob/master/App.js#L44)

#### Vue code
```vue
<dynamic-comp-content v-html="'<div>D. warn</div>'" />
```

#### Warning
<img src=".github/warningD.png">

#### SSR output
```html
<div><div class="dynamic-comp-content"><div>D. warn</div></div></div>
```

#### Client output
```html
<div><div class="dynamic-comp-content"><div>D. warn</div></div></div>
```

### E
[Code](https://github.com/privatenumber/vue-ssr-vhtml-dyncomp-bug/blob/master/App.js#L46)

#### Vue code
```vue
<dynamic-comp-wrapped v-html="'E. warn'" />
```

#### Warning
<img src=".github/warningE.png">

#### SSR output
```html
<div><div>E. warn</div></div>
````

#### Client output
```html
<div><div>E. warn</div></div>
```


