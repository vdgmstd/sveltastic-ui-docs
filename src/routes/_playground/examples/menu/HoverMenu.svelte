<script lang="ts">
	import { Menu, Button, type MenuEntry } from 'sveltastic-ui';
	import { UserIcon, GearIcon, SignOutIcon } from 'phosphor-svelte';

	const items: MenuEntry[] = [
		{ type: 'label', text: 'Account' },
		{ type: 'item', label: 'Profile', icon: UserIcon },
		{ type: 'item', label: 'Settings', icon: GearIcon },
		{ type: 'divider' },
		{ type: 'item', label: 'Logout', icon: SignOutIcon }
	];
</script>

<Menu triggerOn="hover" placement="bottom-start" {items}>
	{#snippet trigger()}
		<Button variant="default" color="primary">Hover me</Button>
	{/snippet}
</Menu>
