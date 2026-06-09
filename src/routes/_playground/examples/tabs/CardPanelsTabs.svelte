<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
</script>

<Tabs.Root bind:value variant="flat" panelVariant="card" transition="crossfade">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="details">Details</Tabs.Trigger>
		<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview">
		<h4 class="panel-title">Overview</h4>
		<p>An at-a-glance summary of your project.</p>
	</Tabs.Content>
	<Tabs.Content value="details">
		<h4 class="panel-title">Details</h4>
		<p>Granular metadata and configuration.</p>
	</Tabs.Content>
	<Tabs.Content value="preview">
		<h4 class="panel-title">Preview</h4>
		<p>A live render of the current selection.</p>
	</Tabs.Content>
</Tabs.Root>

<style>
	.panel-title {
		margin: 0 0 0.5rem;
		font-size: 1rem;
		font-weight: 600;
	}
</style>
