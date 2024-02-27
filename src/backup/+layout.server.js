/** @type {import('../routes/$types').LayoutLoad} */
export async function load() {
	return {
		settings: {
      ui: 'primary',
			server: true
    }
	};
}