<script lang="ts">
	import { Menu, Button } from 'sveltastic-ui';
	import { ScissorsIcon, CopyIcon, ClipboardIcon, ArrowUUpLeftIcon, ArrowUUpRightIcon } from 'phosphor-svelte';
</script>

<Menu.Root placement="bottom-start">
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button.Root variant="border" {...props}>Edit</Button.Root>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content>
		<Menu.Group>
			<Menu.GroupHeading>History</Menu.GroupHeading>
			<Menu.Item>
				<Menu.ItemIcon><ArrowUUpLeftIcon size={14} /></Menu.ItemIcon>
				Undo
				<Menu.ItemTrailing><Menu.Shortcut>⌘Z</Menu.Shortcut></Menu.ItemTrailing>
			</Menu.Item>
			<Menu.Item>
				<Menu.ItemIcon><ArrowUUpRightIcon size={14} /></Menu.ItemIcon>
				Redo
				<Menu.ItemTrailing><Menu.Shortcut>⇧⌘Z</Menu.Shortcut></Menu.ItemTrailing>
			</Menu.Item>
		</Menu.Group>
		<Menu.Separator />
		<Menu.Group>
			<Menu.GroupHeading>Clipboard</Menu.GroupHeading>
			<Menu.Item>
				<Menu.ItemIcon><ScissorsIcon size={14} /></Menu.ItemIcon>
				Cut
				<Menu.ItemTrailing><Menu.Shortcut>⌘X</Menu.Shortcut></Menu.ItemTrailing>
			</Menu.Item>
			<Menu.Item>
				<Menu.ItemIcon><CopyIcon size={14} /></Menu.ItemIcon>
				Copy
				<Menu.ItemTrailing><Menu.Shortcut>⌘C</Menu.Shortcut></Menu.ItemTrailing>
			</Menu.Item>
			<Menu.Item disabled>
				<Menu.ItemIcon><ClipboardIcon size={14} /></Menu.ItemIcon>
				Paste
				<Menu.ItemTrailing><Menu.Shortcut>⌘V</Menu.Shortcut></Menu.ItemTrailing>
			</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
