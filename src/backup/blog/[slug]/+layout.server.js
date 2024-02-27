/** @type {import('./$types').LayoutServerLoad} */
export async function load({ parent }) {
	const settings = await parent();
	return { c: 'blog-setting', ...settings };
}