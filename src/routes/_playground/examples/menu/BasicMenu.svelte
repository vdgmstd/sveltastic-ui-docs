<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { CaretDownIcon, PencilSimpleIcon, CopyIcon, ShareNetworkIcon, TrashIcon } from 'phosphor-svelte';

	let lastAction = $state('—');
</script>

<Menu.Root>
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="border" {...props}>
				Open menu
				<CaretDownIcon size={12} weight="bold" />
			</Button.Root>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.Item onSelect={() => (lastAction = 'Edit')}>
			<Menu.ItemIcon><PencilSimpleIcon size={14} /></Menu.ItemIcon>
			Edit
		</Menu.Item>
		<Menu.Item onSelect={() => (lastAction = 'Duplicate')}>
			<Menu.ItemIcon><CopyIcon size={14} /></Menu.ItemIcon>
			Duplicate
		</Menu.Item>
		<Menu.Item onSelect={() => (lastAction = 'Share')}>
			<Menu.ItemIcon><ShareNetworkIcon size={14} /></Menu.ItemIcon>
			Share
		</Menu.Item>
		<Menu.Separator />
		<Menu.Item danger onSelect={() => (lastAction = 'Delete')}>
			<Menu.ItemIcon><TrashIcon size={14} /></Menu.ItemIcon>
			Delete
		</Menu.Item>
	</Menu.Content>
</Menu.Root>
<p class="muted">Last action: {lastAction}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
