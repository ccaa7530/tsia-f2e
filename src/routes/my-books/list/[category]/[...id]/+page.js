/**
 * @type {import('./$types').PageLoad}
 */
export function load(event) {
  console.log('event', event.params)
  return {
    title: '123',
    content: 'Frank'
  }
}