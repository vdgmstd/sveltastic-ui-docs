<script lang="ts">
	import { Collapse, Chip } from 'sveltastic-ui';
	import { FolderIcon, BellIcon, StarIcon } from 'phosphor-svelte';
</script>

<Collapse.Root variant="default">
	<Collapse.Trigger>
		<Collapse.Icon><FolderIcon size={18} weight="fill" /></Collapse.Icon>
		<Collapse.Title>With icon</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>

<Collapse.Root variant="default">
	<Collapse.Trigger>
		<Collapse.Icon><BellIcon size={18} weight="fill" /></Collapse.Icon>
		<Collapse.Title>With extra slot</Collapse.Title>
		<Collapse.Extra>
			<Chip.Root variant="flat" color="danger">12</Chip.Root>
		</Collapse.Extra>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>

<Collapse.Root variant="flat" color="success">
	<Collapse.Trigger>
		<Collapse.Icon><StarIcon size={16} weight="fill" /></Collapse.Icon>
		<Collapse.Title><strong>Custom header snippet</strong></Collapse.Title>
		<Collapse.Extra>
			<Chip.Root variant="border" color="success">Replaces title</Chip.Root>
		</Collapse.Extra>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content><p>Body content goes here.</p></Collapse.Content>
</Collapse.Root>
