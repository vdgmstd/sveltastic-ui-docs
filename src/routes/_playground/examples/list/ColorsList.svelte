<script lang="ts">
	import { List, ListItem } from 'sveltastic-ui';
</script>

<div class="stack">
	<List color="primary">
		<ListItem active>primary</ListItem>
		<ListItem>secondary</ListItem>
	</List>
	<List color="success">
		<ListItem active>success</ListItem>
		<ListItem>secondary</ListItem>
	</List>
	<List color="danger">
		<ListItem active>danger</ListItem>
		<ListItem>secondary</ListItem>
	</List>
	<List color="warning">
		<ListItem active variant="flat">warning · flat</ListItem>
		<ListItem variant="flat">flat</ListItem>
	</List>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
