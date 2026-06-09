<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
</script>

<!-- activationMode="manual": arrows move focus only, Enter/Space selects. loop wraps past the ends. -->
<Tabs.Root bind:value variant="flat" activationMode="manual" loop>
	<Tabs.List ariaLabel="Manual activation with looping">
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="details">Details</Tabs.Trigger>
		<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
		<Tabs.Trigger value="history">History</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview"><p>An at-a-glance summary of your project.</p></Tabs.Content>
	<Tabs.Content value="details"><p>Granular metadata and configuration.</p></Tabs.Content>
	<Tabs.Content value="preview"><p>A live render of the current selection.</p></Tabs.Content>
	<Tabs.Content value="history"><p>Audit log of recent changes.</p></Tabs.Content>
</Tabs.Root>
