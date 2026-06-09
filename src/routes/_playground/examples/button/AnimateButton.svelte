<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { House, PaperPlaneTilt, Storefront, ShoppingBag, ThumbsUp } from 'phosphor-svelte';
</script>

<Button.Root>
	Home
	{#snippet animate()}
		<House size={18} weight="fill" />
	{/snippet}
</Button.Root>
<Button.Root variant="flat" color="success" animationType="vertical">
	Send
	{#snippet animate()}
		<PaperPlaneTilt size={16} weight="fill" />
		<span>Send</span>
	{/snippet}
</Button.Root>
<Button.Root variant="gradient" color="warning" animationType="scale">
	<ShoppingBag size={18} weight="fill" />
	{#snippet animate()}
		<Storefront size={16} weight="fill" />
		<span>Store</span>
	{/snippet}
</Button.Root>
<Button.Root iconOnly variant="relief" color="danger" animationType="rotate">
	<ThumbsUp size={18} />
	{#snippet animate()}
		<ThumbsUp size={18} weight="fill" />
	{/snippet}
</Button.Root>
