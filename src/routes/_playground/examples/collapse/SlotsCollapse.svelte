<script lang="ts">
	import { Collapse, Chip } from 'sveltastic-ui';
	import { FolderIcon, BellIcon, StarIcon } from 'phosphor-svelte';
</script>

<Collapse variant="default" title="With icon">
	{#snippet icon()}<FolderIcon size={18} weight="fill" />{/snippet}
	<p>Body content goes here.</p>
</Collapse>

<Collapse variant="default" title="With extra slot">
	{#snippet icon()}<BellIcon size={18} weight="fill" />{/snippet}
	{#snippet extra()}
		<Chip variant="flat" color="danger">12</Chip>
	{/snippet}
	<p>Body content goes here.</p>
</Collapse>

<Collapse variant="flat" color="success">
	{#snippet header()}
		<StarIcon size={16} weight="fill" />
		<strong>Custom header snippet</strong>
		<Chip variant="border" color="success">Replaces title</Chip>
	{/snippet}
	<p>Body content goes here.</p>
</Collapse>
