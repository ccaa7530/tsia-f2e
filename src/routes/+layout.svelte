<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { App } from 'konsta/svelte';

</script>
<svelte:head>
	<title>{$page.data?.title ?? 'Default title'}</title>
</svelte:head>

<!-- theme: ios/material -->
<App theme="ios" safeAreas>
  <slot />
</App>