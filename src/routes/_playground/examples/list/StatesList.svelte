<script lang="ts">
	import { List } from 'sveltastic-ui';
	import { CaretRightIcon } from 'phosphor-svelte';
</script>

<List.Root>
	<List.Body>
		<List.Item active>
			<List.ItemContent><List.ItemLabel>Active</List.ItemLabel></List.ItemContent>
		</List.Item>
		<List.Item selected>
			<List.ItemContent><List.ItemLabel>Selected</List.ItemLabel></List.ItemContent>
		</List.Item>
		<List.Item disabled>
			<List.ItemContent><List.ItemLabel>Disabled</List.ItemLabel></List.ItemContent>
		</List.Item>
		<List.Item loading>
			<List.ItemContent><List.ItemLabel>Loading</List.ItemLabel></List.ItemContent>
		</List.Item>
		<List.Item href="https://example.com">
			<List.ItemContent><List.ItemLabel>Link item</List.ItemLabel></List.ItemContent>
			<List.ItemTrail><CaretRightIcon size={14} /></List.ItemTrail>
		</List.Item>
	</List.Body>
</List.Root>
