<script lang="ts">
	import { List, ListItem } from 'sveltastic-ui';
</script>

<div class="stack">
	<List variant="default">
		<ListItem>default</ListItem>
		<ListItem active>active</ListItem>
	</List>
	<List variant="flat">
		<ListItem>flat</ListItem>
		<ListItem active variant="flat">active flat</ListItem>
	</List>
	<List variant="border">
		<ListItem>border</ListItem>
		<ListItem>border</ListItem>
	</List>
	<List variant="transparent">
		<ListItem>transparent</ListItem>
		<ListItem>transparent</ListItem>
	</List>
	<List variant="shadow">
		<ListItem>shadow</ListItem>
		<ListItem>shadow</ListItem>
	</List>
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
