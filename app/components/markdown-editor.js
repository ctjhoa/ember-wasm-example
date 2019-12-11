import Component from '@ember/component';

export default Component.extend({
  rendered: '',

  didReceiveAttrs() {
		(async () => {
			// Importing a wasm module!
			const { format } = await import('pulldown-cmark-wasm')

			this.set('rendered', format(this.get('value')));
		})()

  }
});
