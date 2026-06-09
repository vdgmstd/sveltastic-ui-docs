<script lang="ts">
	import { List } from 'sveltastic-ui';
	import { FolderIcon, UsersIcon, UserCircleIcon, SignOutIcon } from 'phosphor-svelte';

	let active = $state('projects');
</script>

<List.Root>
	<List.Body>
		<List.Group>
			<List.GroupLabel>Workspace</List.GroupLabel>
			<List.Item active={active === 'projects'} onclick={() => (active = 'projects')}>
				<List.ItemLead><FolderIcon size={18} /></List.ItemLead>
				<List.ItemContent><List.ItemLabel>Projects</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item active={active === 'members'} onclick={() => (active = 'members')}>
				<List.ItemLead><UsersIcon size={18} /></List.ItemLead>
				<List.ItemContent><List.ItemLabel>Members</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Group>
		<List.Separator />
		<List.Group>
			<List.GroupLabel>Account</List.GroupLabel>
			<List.Item active={active === 'profile'} onclick={() => (active = 'profile')}>
				<List.ItemLead><UserCircleIcon size={18} /></List.ItemLead>
				<List.ItemContent><List.ItemLabel>Profile</List.ItemLabel></List.ItemContent>
			</List.Item>
			<List.Item color="danger" active={active === 'signout'} onclick={() => (active = 'signout')}>
				<List.ItemLead><SignOutIcon size={18} /></List.ItemLead>
				<List.ItemContent><List.ItemLabel>Sign out</List.ItemLabel></List.ItemContent>
			</List.Item>
		</List.Group>
	</List.Body>
</List.Root>
