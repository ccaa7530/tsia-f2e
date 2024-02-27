<script>
  /**
   * @type {import('./$types').PageData}
   */
  export let data;
</script>

{#await data.comments}
	Loading comments...
{:then comments}
	{#each comments as comment}
		<p>Title: {comment.title}</p>
    <div>Text: {comment.text}</div>
    <hr>
	{/each}
{:catch error}
	<p>error loading comments: {error.message}</p>
{/await}