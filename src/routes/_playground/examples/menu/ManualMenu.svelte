<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';

	let open = $state(false);

	const items: MenuEntry[] = [
		{ type: 'item', label: 'Option 1' },
		{ type: 'item', label: 'Option 2' },
		{ type: 'item', label: 'Option 3' }
	];
</script>

<Button onclick={() => (open = !open)}>
	{open ? 'Close menu' : 'Open menu'}
</Button>
<Menu bind:open triggerOn="manual" placement="bottom" {items}>
	{#snippet trigger()}
		<span class="anchor">Anchor</span>
	{/snippet}
</Menu>

<style>
	.anchor {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 6px 12px;
		font-size: 0.8rem;
		background: rgb(var(--gray-2));
		border-radius: 8px;
		color: rgb(var(--text) / 0.7);
		font-style: italic;
	}
</style>
