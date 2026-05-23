<script lang="ts">
	import { List, ListItem } from 'sveltastic-ui';
	import { CaretRightIcon } from 'phosphor-svelte';
</script>

<List>
	<ListItem active>Active</ListItem>
	<ListItem selected>Selected</ListItem>
	<ListItem disabled>Disabled</ListItem>
	<ListItem loading>Loading</ListItem>
	<ListItem href="https://example.com">
		{#snippet trail()}<CaretRightIcon size={14} />{/snippet}
		Link item
	</ListItem>
</List>
