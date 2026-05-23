<script lang="ts">
	import { Collapse, CollapseGroup } from 'sveltastic-ui';
	import { FilesIcon, GearIcon, ShieldCheckIcon } from 'phosphor-svelte';

	let value = $state<string[]>(['a']);
</script>

<CollapseGroup mode="multiple" variant="flat" color="primary" bind:value>
	<Collapse key="a" title="Files">
		{#snippet icon()}<FilesIcon size={18} />{/snippet}
		<p>All files synced across devices.</p>
	</Collapse>
	<Collapse key="b" title="Settings">
		{#snippet icon()}<GearIcon size={18} />{/snippet}
		<p>Workspace defaults and per-app overrides.</p>
	</Collapse>
	<Collapse key="c" title="Security">
		{#snippet icon()}<ShieldCheckIcon size={18} />{/snippet}
		<p>Two-factor authentication, audit log, sessions.</p>
	</Collapse>
</CollapseGroup>
