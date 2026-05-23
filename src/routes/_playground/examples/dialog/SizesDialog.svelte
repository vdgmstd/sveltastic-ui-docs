<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';
	import type { DialogSize } from 'sveltastic-ui';

	const sizes: DialogSize[] = ['small', 'medium', 'large', 'fullscreen'];
	let active = $state<DialogSize | null>(null);
</script>

<div class="row">
	{#each sizes as size (size)}
		<Button variant="flat" size="small" onclick={() => (active = size)}>{size}</Button>
	{/each}
</div>

<Dialog open={active !== null} size={active ?? 'medium'} onclose={() => (active = null)}>
	{#snippet header()}{active} dialog{/snippet}
	<p>Resizing presets: small (400px), medium (520px), large (720px), and fullscreen.</p>
	<p>All sizes respect the viewport with a 92vw max-width and 90vh max-height.</p>
	{#snippet footer()}
		<Button variant="flat" onclick={() => (active = null)}>Close</Button>
	{/snippet}
</Dialog>

<style>
	.row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
</style>
