<script lang="ts">
	import { Button } from 'sveltastic-ui';
	import { ArrowUpRight } from 'phosphor-svelte';
</script>

<!-- `child` lets the consumer own the host element while the kit keeps its styled body. -->
<Button.Root variant="gradient" color="success" href="https://svelte.dev">
	{#snippet child({ props, body })}
		<a {...props} target="_blank" rel="noopener noreferrer">
			{@render body()}
		</a>
	{/snippet}
	Visit Svelte
	<ArrowUpRight size={16} weight="bold" />
</Button.Root>
