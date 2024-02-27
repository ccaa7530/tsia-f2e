<script>
  import { page } from '$app/stores';
  // console.log('pages data', page)
</script>
<svelte:head>
	<title>{$page.data?.title ?? 'Default title'}</title>
</svelte:head>
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/blog/test">Blog</a>
  <a href="/my-books/list/h/123">My Books</a>
  <a href="/todo/hello-world">Todo</a>
  <a href="/comments">Comments</a>
</nav>

<slot></slot>