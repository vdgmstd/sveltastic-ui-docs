<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
</script>

<!-- child snippet: receive the merged props and render your own element (here a plain button). -->
<Tabs.Root bind:value variant="flat">
	<Tabs.List ariaLabel="Custom trigger element">
		<Tabs.Trigger value="overview">
			{#snippet child({ props })}
				<button {...props} class="custom-tab">★ Overview</button>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="details">
			{#snippet child({ props })}
				<button {...props} class="custom-tab">☆ Details</button>
			{/snippet}
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview">
		{#snippet child({ props, active })}
			<div {...props}>
				<p>Custom panel — active: {active}</p>
			</div>
		{/snippet}
	</Tabs.Content>
	<Tabs.Content value="details">
		{#snippet child({ props, active })}
			<div {...props}>
				<p>Custom panel — active: {active}</p>
			</div>
		{/snippet}
	</Tabs.Content>
</Tabs.Root>

<style>
	.custom-tab {
		font-weight: 600;
	}
</style>
