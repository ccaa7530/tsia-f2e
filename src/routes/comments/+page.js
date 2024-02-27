/**
 * 
 * @returns {Promise<Array<{ title: string, text: string }>>}
 */
function loadComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'One',
          text: 'Hey~~'
        },
        {
          title: 'Two',
          text: 'Jue~~~'
        }
      ])
    }, 5000);
  })
}

/** @type {import('./$types').PageLoad} */
export function load() {
  return {
    comments: loadComments()
  }
}