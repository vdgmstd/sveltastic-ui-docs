<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { ChatCircle, Plus, BookmarkSimple, DownloadSimple } from 'phosphor-svelte';
</script>

<Button.Root fixedWidth color="primary">
	<ChatCircle size={16} weight="fill" />
	Reply
	{#snippet animate()}
		<ChatCircle size={16} weight="fill" />
		<span>Reply now</span>
	{/snippet}
</Button.Root>
<Button.Root fixedWidth variant="flat" color="success">
	Add
	{#snippet animate()}
		<Plus size={16} weight="bold" />
		<span>Add to cart</span>
	{/snippet}
</Button.Root>
<Button.Root fixedWidth variant="border" color="warning">
	<BookmarkSimple size={16} weight="regular" />
	Save
	{#snippet animate()}
		<BookmarkSimple size={16} weight="fill" />
		<span>Saved to favorites</span>
	{/snippet}
</Button.Root>
<Button.Root fixedWidth variant="gradient" color="danger">
	<DownloadSimple size={16} weight="bold" />
	Download
	{#snippet animate()}
		<DownloadSimple size={16} weight="bold" />
		<span>Download report PDF</span>
	{/snippet}
</Button.Root>
