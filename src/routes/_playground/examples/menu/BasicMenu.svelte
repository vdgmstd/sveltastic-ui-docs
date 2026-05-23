<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';
	import { CaretDownIcon, PencilSimpleIcon, CopyIcon, ShareNetworkIcon, TrashIcon } from 'phosphor-svelte';

	let lastAction = $state('—');

	const items: MenuEntry[] = [
		{ type: 'item', label: 'Edit', icon: PencilSimpleIcon, onclick: () => (lastAction = 'Edit') },
		{ type: 'item', label: 'Duplicate', icon: CopyIcon, onclick: () => (lastAction = 'Duplicate') },
		{ type: 'item', label: 'Share', icon: ShareNetworkIcon, onclick: () => (lastAction = 'Share') },
		{ type: 'divider' },
		{ type: 'item', label: 'Delete', icon: TrashIcon, danger: true, onclick: () => (lastAction = 'Delete') }
	];
</script>

<Menu {items}>
	{#snippet trigger()}
		<Button variant="border">
			Open menu
			<CaretDownIcon size={12} weight="bold" />
		</Button>
	{/snippet}
</Menu>
<p class="muted">Last action: {lastAction}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
