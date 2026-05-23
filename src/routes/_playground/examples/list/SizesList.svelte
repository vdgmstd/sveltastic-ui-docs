<script lang="ts">
	import { List, ListItem } from 'sveltastic-ui';
</script>

<div class="stack">
	<List size="xl">
		<ListItem>xl</ListItem>
		<ListItem>xl</ListItem>
	</List>
	<List size="large">
		<ListItem>large</ListItem>
		<ListItem>large</ListItem>
	</List>
	<List size="medium">
		<ListItem>medium</ListItem>
		<ListItem>medium</ListItem>
	</List>
	<List size="small">
		<ListItem>small</ListItem>
		<ListItem>small</ListItem>
	</List>
	<List size="mini">
		<ListItem>mini</ListItem>
		<ListItem>mini</ListItem>
	</List>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
