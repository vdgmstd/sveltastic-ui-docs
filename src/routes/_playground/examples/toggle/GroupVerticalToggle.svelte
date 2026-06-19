<script lang="ts">
	import { ToggleGroup } from 'sveltastic-ui';

	let view = $state('list');
</script>

<ToggleGroup.Root type="single" bind:value={view} orientation="vertical" variant="flat" ariaLabel="View mode">
	<ToggleGroup.Item value="list">List</ToggleGroup.Item>
	<ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
	<ToggleGroup.Item value="board">Board</ToggleGroup.Item>
</ToggleGroup.Root>
<span class="muted">→ {view || 'none'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
