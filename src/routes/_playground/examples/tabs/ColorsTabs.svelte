<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let success = $state('overview');
	let danger = $state('overview');
	let warning = $state('overview');
</script>

<div class="grid">
	<Tabs.Root bind:value={success} color="success" variant="default">
		<Tabs.List>
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="details">Details</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>
	<Tabs.Root bind:value={danger} color="danger" variant="flat">
		<Tabs.List>
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="details">Details</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>
	<Tabs.Root bind:value={warning} color="warning" variant="border">
		<Tabs.List>
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="details">Details</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
		width: 100%;
	}
</style>
