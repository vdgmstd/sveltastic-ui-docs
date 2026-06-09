<script lang="ts">
	import { Tabs } from 'sveltastic-ui';

	let value = $state('overview');
</script>

<Tabs.Root bind:value color="dark">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="preview" disabled>Preview</Tabs.Trigger>
		<Tabs.Trigger value="history">History</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview"><p>An at-a-glance summary of your project.</p></Tabs.Content>
	<Tabs.Content value="preview"><p>A live render of the current selection.</p></Tabs.Content>
	<Tabs.Content value="history"><p>Audit log of recent changes.</p></Tabs.Content>
</Tabs.Root>
