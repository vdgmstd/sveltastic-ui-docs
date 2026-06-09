<script lang="ts">
	import { Tabs } from 'sveltastic-ui';
	import {
		HouseIcon,
		ChartLineIcon,
		EyeIcon,
		ClockCounterClockwiseIcon
	} from 'phosphor-svelte';

	let value = $state('overview');
</script>

<Tabs.Root bind:value variant="flat">
	<Tabs.List ariaLabel="Tabs with icons">
		<Tabs.Trigger value="overview">
			<Tabs.Icon><HouseIcon size={16} /></Tabs.Icon>
			<Tabs.Label>Overview</Tabs.Label>
		</Tabs.Trigger>
		<Tabs.Trigger value="details">
			<Tabs.Icon><ChartLineIcon size={16} /></Tabs.Icon>
			<Tabs.Label>Details</Tabs.Label>
		</Tabs.Trigger>
		<Tabs.Trigger value="preview">
			<Tabs.Icon><EyeIcon size={16} /></Tabs.Icon>
			<Tabs.Label>Preview</Tabs.Label>
		</Tabs.Trigger>
		<Tabs.Trigger value="history">
			<Tabs.Icon><ClockCounterClockwiseIcon size={16} /></Tabs.Icon>
			<Tabs.Label>History</Tabs.Label>
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview"><p>An at-a-glance summary of your project.</p></Tabs.Content>
	<Tabs.Content value="details"><p>Granular metadata and configuration.</p></Tabs.Content>
	<Tabs.Content value="preview"><p>A live render of the current selection.</p></Tabs.Content>
	<Tabs.Content value="history"><p>Audit log of recent changes.</p></Tabs.Content>
</Tabs.Root>
