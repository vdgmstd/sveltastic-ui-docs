<script lang="ts">
	import { List } from 'sveltastic-ui';

	const folders = ['Inbox', 'Sent', 'Archive', 'Trash'];
	let active = $state('Inbox');
</script>

<List.Root>
	<List.Body>
		{#each folders as folder (folder)}
			<List.Item active={active === folder} onclick={() => (active = folder)}>
				<List.ItemContent>
					<List.ItemLabel>{folder}</List.ItemLabel>
				</List.ItemContent>
			</List.Item>
		{/each}
	</List.Body>
</List.Root>
