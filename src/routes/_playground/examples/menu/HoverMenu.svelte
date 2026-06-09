<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { UserIcon, GearIcon, SignOutIcon } from 'phosphor-svelte';
</script>

<Menu.Root triggerOn="hover" placement="bottom-start">
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="default" color="primary" {...props}>Hover me</Button.Root>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.GroupHeading>Account</Menu.GroupHeading>
		<Menu.Item>
			<Menu.ItemIcon><UserIcon size={14} /></Menu.ItemIcon>
			Profile
		</Menu.Item>
		<Menu.Item>
			<Menu.ItemIcon><GearIcon size={14} /></Menu.ItemIcon>
			Settings
		</Menu.Item>
		<Menu.Separator />
		<Menu.Item>
			<Menu.ItemIcon><SignOutIcon size={14} /></Menu.ItemIcon>
			Logout
		</Menu.Item>
	</Menu.Content>
</Menu.Root>
