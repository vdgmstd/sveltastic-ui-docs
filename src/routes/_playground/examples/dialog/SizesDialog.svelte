<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';
	import type { DialogSize } from 'sveltastic-ui';

	const sizes: DialogSize[] = ['small', 'medium', 'large', 'fullscreen'];
	let open = $state<Record<DialogSize, boolean>>({
		small: false,
		medium: false,
		large: false,
		fullscreen: false
	});
</script>

<div class="row">
	{#each sizes as size (size)}
		<Dialog.Root bind:open={open[size]} {size}>
			<Dialog.Trigger>
				{#snippet child({ props })}
					<Button.Root variant="flat" size="small" {...props}>{size}</Button.Root>
				{/snippet}
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Close />
				<Dialog.Title>{size} dialog</Dialog.Title>
				<Dialog.Body>
					<p>Resizing presets: small (400px), medium (520px), large (720px), and fullscreen.</p>
					<p>All sizes respect the viewport with a 92vw max-width and 90vh max-height.</p>
				</Dialog.Body>
				<Dialog.Footer>
					<Button.Root variant="flat" onclick={() => (open[size] = false)}>Close</Button.Root>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
