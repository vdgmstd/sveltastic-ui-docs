<script lang="ts">
	import { List } from 'sveltastic-ui';

	const items: string[] = [];
</script>

<List.Root>
	<List.Body>
		{#each items as item (item)}
			<List.Item>
				<List.ItemContent><List.ItemLabel>{item}</List.ItemLabel></List.ItemContent>
			</List.Item>
		{:else}
			<List.Empty>Nothing here yet.</List.Empty>
		{/each}
	</List.Body>
</List.Root>
