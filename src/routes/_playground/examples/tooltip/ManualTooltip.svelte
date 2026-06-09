<script lang="ts">
	import { Button, Tooltip } from 'sveltastic-ui';

	let open = $state(false);
	let lastOpen = $state<boolean | null>(null);
</script>

<Button.Root onclick={() => (open = !open)}>{open ? 'Hide' : 'Show'}</Button.Root>

<Tooltip.Root trigger="manual" bind:open color="primary" onOpenChange={(v) => (lastOpen = v)}>
	<Tooltip.Trigger><Button.Root variant="border">Anchor</Button.Root></Tooltip.Trigger>
	<Tooltip.Content variant="shadow">Driven by bind:open</Tooltip.Content>
</Tooltip.Root>

<p class="status">onOpenChange: {lastOpen === null ? '—' : lastOpen}</p>

<style>
	.status {
		flex-basis: 100%;
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		opacity: 0.75;
	}
</style>
