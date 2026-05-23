<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { House, PaperPlaneTilt, Storefront, ShoppingBag, ThumbsUp } from 'phosphor-svelte';
</script>

<Button>
	Home
	{#snippet animate()}
		<House size={18} weight="fill" />
	{/snippet}
</Button>
<Button variant="flat" color="success" animationType="vertical">
	Send
	{#snippet animate()}
		<PaperPlaneTilt size={16} weight="fill" />
		<span>Send</span>
	{/snippet}
</Button>
<Button variant="gradient" color="warning" animationType="scale">
	<ShoppingBag size={18} weight="fill" />
	{#snippet animate()}
		<Storefront size={16} weight="fill" />
		<span>Store</span>
	{/snippet}
</Button>
<Button iconOnly variant="relief" color="danger" animationType="rotate">
	<ThumbsUp size={18} />
	{#snippet animate()}
		<ThumbsUp size={18} weight="fill" />
	{/snippet}
</Button>
