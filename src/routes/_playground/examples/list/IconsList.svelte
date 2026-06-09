<script lang="ts">
	import { List, Avatar, Chip } from 'sveltastic-ui';
	import { CaretRightIcon, GearIcon, BellIcon } from 'phosphor-svelte';

	let active = $state('account');
</script>

<List.Root>
	<List.Body>
		<List.Item active={active === 'account'} onclick={() => (active = 'account')}>
			<List.ItemLead>
				<Avatar.Root color="primary" size={32}><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
			</List.ItemLead>
			<List.ItemContent>
				<List.ItemLabel>John Doe</List.ItemLabel>
				<List.ItemDescription>Account holder</List.ItemDescription>
			</List.ItemContent>
			<List.ItemTrail>
				<Chip.Root variant="flat" color="primary">Owner</Chip.Root>
			</List.ItemTrail>
		</List.Item>
		<List.Item active={active === 'settings'} onclick={() => (active = 'settings')}>
			<List.ItemLead><GearIcon size={20} /></List.ItemLead>
			<List.ItemContent>
				<List.ItemLabel>Settings</List.ItemLabel>
				<List.ItemDescription>Workspace defaults, billing, exports</List.ItemDescription>
			</List.ItemContent>
			<List.ItemTrail><CaretRightIcon size={14} /></List.ItemTrail>
		</List.Item>
		<List.Item active={active === 'notifications'} onclick={() => (active = 'notifications')}>
			<List.ItemLead><BellIcon size={20} /></List.ItemLead>
			<List.ItemContent>
				<List.ItemLabel>Notifications</List.ItemLabel>
				<List.ItemDescription>Mentions, comments, reactions</List.ItemDescription>
			</List.ItemContent>
			<List.ItemTrail>
				<Chip.Root variant="flat" color="danger">3</Chip.Root>
			</List.ItemTrail>
		</List.Item>
	</List.Body>
</List.Root>
