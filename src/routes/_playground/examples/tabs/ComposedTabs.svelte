<script lang="ts">
	import { Tabs, Avatar, Chip, List, Button } from 'sveltastic-ui';

	let value = $state('users');
</script>

<Tabs.Root bind:value variant="flat" panelVariant="card" transition="crossfade">
	<Tabs.List>
		<Tabs.Trigger value="users">Users</Tabs.Trigger>
		<Tabs.Trigger value="badges">Badges</Tabs.Trigger>
		<Tabs.Trigger value="actions">Actions</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="users">
		<List.Root variant="transparent">
			<List.Body>
				<List.Item>
					<List.ItemLead>
						<Avatar.Root color="primary" size={32}><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root>
					</List.ItemLead>
					<List.ItemContent><List.ItemLabel>Joana Doe</List.ItemLabel></List.ItemContent>
					<List.ItemTrail><Chip.Root variant="flat" color="primary">admin</Chip.Root></List.ItemTrail>
				</List.Item>
				<List.Item>
					<List.ItemLead>
						<Avatar.Root color="success" size={32}><Avatar.Fallback>MK</Avatar.Fallback></Avatar.Root>
					</List.ItemLead>
					<List.ItemContent><List.ItemLabel>Marc Kowalski</List.ItemLabel></List.ItemContent>
					<List.ItemTrail><Chip.Root variant="flat" color="success">editor</Chip.Root></List.ItemTrail>
				</List.Item>
			</List.Body>
		</List.Root>
	</Tabs.Content>
	<Tabs.Content value="badges">
		<div class="row">
			<Chip.Root color="primary">primary</Chip.Root>
			<Chip.Root color="success" variant="flat">success</Chip.Root>
			<Chip.Root color="danger" variant="flat">danger</Chip.Root>
			<Chip.Root color="warning" variant="flat">warning</Chip.Root>
		</div>
	</Tabs.Content>
	<Tabs.Content value="actions">
		<div class="row">
			<Button.Root color="primary">Save</Button.Root>
			<Button.Root variant="flat" color="primary">Edit</Button.Root>
			<Button.Root variant="border" color="danger">Delete</Button.Root>
		</div>
	</Tabs.Content>
</Tabs.Root>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
	}
</style>
