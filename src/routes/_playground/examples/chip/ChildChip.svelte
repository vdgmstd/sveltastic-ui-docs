<script lang="ts">
	import { Chip } from 'sveltastic-ui';
	import { ArrowUpRightIcon } from 'phosphor-svelte';

	const href = 'https://example.com';
</script>

<!-- child: render your own <a> host; the styled body (bg + content) drops inside via {@render body()}. -->
<Chip.Root variant="flat" color="primary" onclick={() => {}}>
	<Chip.Icon><ArrowUpRightIcon size={12} weight="bold" /></Chip.Icon>
	Open link
	{#snippet child({ props, body })}
		<a {...props} {href} target="_blank" rel="noopener">{@render body()}</a>
	{/snippet}
</Chip.Root>
