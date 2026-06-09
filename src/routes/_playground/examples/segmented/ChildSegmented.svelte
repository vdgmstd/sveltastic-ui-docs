<script lang="ts">
	import { Segmented } from 'sveltastic-ui';

	let value = $state<'grid' | 'list'>('grid');
</script>

<!-- child snippet: receive the merged props and render your own element. -->
<Segmented.Root bind:value ariaLabel="Custom segment element">
	<Segmented.Item value="grid">
		{#snippet child({ props })}
			<button {...props} class="custom-segment">▦ Grid</button>
		{/snippet}
	</Segmented.Item>
	<Segmented.Item value="list">
		{#snippet child({ props })}
			<button {...props} class="custom-segment">☰ List</button>
		{/snippet}
	</Segmented.Item>
</Segmented.Root>

<style>
	.custom-segment {
		font-weight: 600;
	}
</style>
