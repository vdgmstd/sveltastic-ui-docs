<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';

	const placements = [
		'bottom-start',
		'bottom',
		'bottom-end',
		'top-start',
		'top',
		'top-end'
	] as const;

	const items: MenuEntry[] = [
		{ type: 'item', label: 'Option 1' },
		{ type: 'item', label: 'Option 2' },
		{ type: 'item', label: 'Option 3' }
	];
</script>

<div class="grid">
	{#each placements as placement (placement)}
		<Menu {placement} {items}>
			{#snippet trigger()}
				<Button variant="flat" size="small" color={placement.startsWith('top') ? 'success' : 'primary'}>
					{placement}
				</Button>
			{/snippet}
		</Menu>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		gap: 0.75rem 1rem;
	}
</style>
