<script lang="ts">
	import { List, ListItem } from 'sveltastic-ui';
	import {
		CaretRightIcon,
		TrayIcon,
		PaperPlaneTiltIcon,
		ArchiveIcon,
		TrashIcon
	} from 'phosphor-svelte';

	const folders = [
		{ id: 'a', label: 'Inbox', icon: TrayIcon },
		{ id: 'b', label: 'Sent', icon: PaperPlaneTiltIcon },
		{ id: 'c', label: 'Archive', icon: ArchiveIcon },
		{ id: 'd', label: 'Trash', icon: TrashIcon }
	];
</script>

<List>
	{#snippet header()}Folders{/snippet}
	{#snippet footer()}4 folders{/snippet}
	{#each folders as f (f.id)}
		<ListItem>
			{#snippet lead()}<f.icon size={18} />{/snippet}
			{#snippet trail()}<CaretRightIcon size={14} />{/snippet}
			{f.label}
		</ListItem>
	{/each}
</List>
