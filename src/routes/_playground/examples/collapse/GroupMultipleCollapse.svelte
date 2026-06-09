<script lang="ts">
	import { Collapse } from 'sveltastic-ui';
	import { FilesIcon, GearIcon, ShieldCheckIcon } from 'phosphor-svelte';

	let value = $state<string[]>(['a']);
</script>

<Collapse.Group type="multiple" variant="flat" color="primary" bind:value>
	<Collapse.Root key="a">
		<Collapse.Trigger>
			<Collapse.Icon><FilesIcon size={18} /></Collapse.Icon>
			<Collapse.Title>Files</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>All files synced across devices.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="b">
		<Collapse.Trigger>
			<Collapse.Icon><GearIcon size={18} /></Collapse.Icon>
			<Collapse.Title>Settings</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Workspace defaults and per-app overrides.</p></Collapse.Content>
	</Collapse.Root>
	<Collapse.Root key="c">
		<Collapse.Trigger>
			<Collapse.Icon><ShieldCheckIcon size={18} /></Collapse.Icon>
			<Collapse.Title>Security</Collapse.Title>
			<Collapse.Caret />
		</Collapse.Trigger>
		<Collapse.Content><p>Two-factor authentication, audit log, sessions.</p></Collapse.Content>
	</Collapse.Root>
</Collapse.Group>
