export const ssr = false;

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	return {
		settings: {
      ui: 'primary'
    }
	};
}