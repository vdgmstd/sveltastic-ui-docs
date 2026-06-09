<script lang="ts">
	import { Tabs } from 'sveltastic-ui';
	import type { Size } from 'sveltastic-ui';

	let value = $state('overview');
	const sizes: Size[] = ['xl', 'large', 'medium', 'small', 'mini'];
</script>

<div class="stack">
	{#each sizes as size (size)}
		<Tabs.Root bind:value variant="flat" {size}>
			<Tabs.List ariaLabel={`${size} size`}>
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="details">Details</Tabs.Trigger>
				<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>
	{/each}
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
</style>
