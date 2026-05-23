<script lang="ts">
	import { List, ListItem, Avatar, Chip } from 'sveltastic-ui';
	import { CaretRightIcon, GearIcon, BellIcon } from 'phosphor-svelte';
</script>

<List>
	<ListItem>
		{#snippet lead()}<Avatar text="JD" color="primary" size={32} />{/snippet}
		{#snippet trail()}<Chip variant="flat" color="primary">Owner</Chip>{/snippet}
		{#snippet description()}Account holder{/snippet}
		John Doe
	</ListItem>
	<ListItem>
		{#snippet lead()}<GearIcon size={20} />{/snippet}
		{#snippet trail()}<CaretRightIcon size={14} />{/snippet}
		{#snippet description()}Workspace defaults, billing, exports{/snippet}
		Settings
	</ListItem>
	<ListItem>
		{#snippet lead()}<BellIcon size={20} />{/snippet}
		{#snippet trail()}<Chip variant="flat" color="danger">3</Chip>{/snippet}
		{#snippet description()}Mentions, comments, reactions{/snippet}
		Notifications
	</ListItem>
</List>
