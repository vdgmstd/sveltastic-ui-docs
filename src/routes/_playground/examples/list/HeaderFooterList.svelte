<script lang="ts">
	import { List } from 'sveltastic-ui';
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
	let active = $state('a');
</script>

<List.Root>
	<List.Header>Folders</List.Header>
	<List.Body>
		{#each folders as f (f.id)}
			<List.Item active={active === f.id} onclick={() => (active = f.id)}>
				<List.ItemLead><f.icon size={18} /></List.ItemLead>
				<List.ItemContent><List.ItemLabel>{f.label}</List.ItemLabel></List.ItemContent>
				<List.ItemTrail><CaretRightIcon size={14} /></List.ItemTrail>
			</List.Item>
		{/each}
	</List.Body>
	<List.Footer>4 folders</List.Footer>
</List.Root>
