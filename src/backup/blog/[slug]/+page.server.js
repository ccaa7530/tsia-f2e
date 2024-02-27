import { error } from '@sveltejs/kit';

/**
 * @param {string} slug 
 * @returns 
 */
const getPostFromDatabase = async (slug) => {
  return new Promise((resolve) => {
    resolve({
			title: 'Hello world from server!' + slug,
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    })
  })
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const post = await getPostFromDatabase(params.slug);

	if (post) {
		return post;
	}

	error(404, 'Not found');
}