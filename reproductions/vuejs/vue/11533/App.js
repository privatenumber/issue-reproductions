const DynamicCompWrapped = {
	template: `
  <div>
    <component
      is="div"
      class="dynamic-comp-wrapped"
    >
      Some content
    </component>
  </div>
`,
};

const DynamicCompContent = {
	template: `
  <component
    is="div"
    class="dynamic-comp-content"
  >
    Some content
  </component>
  `,
};

const DynamicCompEmpty = {
	template: `
   <component
    is="div"
    class="dynamic-comp-empty"
  />
  `,
};

const App = {
	template: `
  <div id="app">
    <dynamic-comp-empty v-html="'A. no warn'" />

    <dynamic-comp-empty v-html="'<div>B. no warn</div>'" />

    <dynamic-comp-content v-html="'C. no warn'" />

    <dynamic-comp-content v-html="'<div>D. warn</div>'" />

    <dynamic-comp-wrapped v-html="'E. warn'" />

    <dynamic-comp-wrapped v-html="'<div>F. no warn</div>'" />
  </div>
`,
	components: { DynamicCompContent, DynamicCompEmpty, DynamicCompWrapped },
};

if (typeof module !== 'undefined') {
	const Vue = require('vue');
	module.exports = () => new Vue(App);
} else {
	new window.Vue({
		el: '#app',
		...App,
	});
}
