<script lang="ts">
	import { Collapse, Chip } from 'sveltastic-ui';

	let open = $state(false);
	let lastChange = $state<boolean | null>(null);
	let lastComplete = $state<boolean | null>(null);
</script>

<Collapse.Root
	variant="flat"
	color="primary"
	bind:open
	onOpenChange={(o) => (lastChange = o)}
	onOpenChangeComplete={(o) => (lastComplete = o)}
>
	<Collapse.Trigger>
		<Collapse.Title>Toggle me</Collapse.Title>
		<Collapse.Caret />
	</Collapse.Trigger>
	<Collapse.Content>
		<p>onOpenChange fires the instant open flips; onOpenChangeComplete fires after the slide settles.</p>
	</Collapse.Content>
</Collapse.Root>

<div class="status">
	<Chip.Root variant="flat" color={open ? 'success' : 'dark'}>open: {open}</Chip.Root>
	<Chip.Root variant="border" color="primary">onOpenChange: {lastChange ?? '—'}</Chip.Root>
	<Chip.Root variant="border" color="dark">onOpenChangeComplete: {lastComplete ?? '—'}</Chip.Root>
</div>

<style>
	.status {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
		margin-top: 12px;
	}
</style>
