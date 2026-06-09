<script lang="ts">
	import { List } from 'sveltastic-ui';

	const sizes = ['xl', 'large', 'medium', 'small', 'mini'] as const;
	let active = $state<Record<string, number>>({ xl: -1, large: -1, medium: -1, small: -1, mini: -1 });
</script>

<div class="stack">
	{#each sizes as size (size)}
		<List.Root {size}>
			<List.Body>
				<List.Item active={active[size] === 0} onclick={() => (active[size] = 0)}>
					<List.ItemContent><List.ItemLabel>{size}</List.ItemLabel></List.ItemContent>
				</List.Item>
				<List.Item active={active[size] === 1} onclick={() => (active[size] = 1)}>
					<List.ItemContent><List.ItemLabel>{size}</List.ItemLabel></List.ItemContent>
				</List.Item>
			</List.Body>
		</List.Root>
	{/each}
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
