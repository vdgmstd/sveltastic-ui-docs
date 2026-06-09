<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
	const variants = ['underline', 'default', 'flat', 'border', 'relief'] as const;
</script>

<div class="stack">
	{#each variants as variant (variant)}
		<Tabs.Root bind:value {variant}>
			<Tabs.List ariaLabel={`${variant} variant`}>
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
