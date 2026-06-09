<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
</script>

<Tabs.Root bind:value variant="flat" orientation="vertical">
	<div class="vertical">
		<Tabs.List ariaLabel="Vertical tabs">
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="details">Details</Tabs.Trigger>
			<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
			<Tabs.Trigger value="history">History</Tabs.Trigger>
		</Tabs.List>
		<div class="vertical__panels">
			<Tabs.Content value="overview"><p>An at-a-glance summary of your project.</p></Tabs.Content>
			<Tabs.Content value="details"><p>Granular metadata and configuration.</p></Tabs.Content>
			<Tabs.Content value="preview"><p>A live render of the current selection.</p></Tabs.Content>
			<Tabs.Content value="history"><p>Audit log of recent changes.</p></Tabs.Content>
		</div>
	</div>
</Tabs.Root>

<style>
	.vertical {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		width: 100%;
	}
	.vertical__panels {
		flex: 1 1 0;
		min-width: 0;
	}
</style>
