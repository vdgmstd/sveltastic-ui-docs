<script lang="ts">
	import { List, ListItem, ListGroup, ListDivider } from 'sveltastic-ui';
	import { FolderIcon, UsersIcon, UserCircleIcon, SignOutIcon } from 'phosphor-svelte';
</script>

<List>
	<ListGroup>
		{#snippet label()}Workspace{/snippet}
		<ListItem>
			{#snippet lead()}<FolderIcon size={18} />{/snippet}
			Projects
		</ListItem>
		<ListItem>
			{#snippet lead()}<UsersIcon size={18} />{/snippet}
			Members
		</ListItem>
	</ListGroup>
	<ListDivider />
	<ListGroup>
		{#snippet label()}Account{/snippet}
		<ListItem>
			{#snippet lead()}<UserCircleIcon size={18} />{/snippet}
			Profile
		</ListItem>
		<ListItem color="danger">
			{#snippet lead()}<SignOutIcon size={18} />{/snippet}
			Sign out
		</ListItem>
	</ListGroup>
</List>
