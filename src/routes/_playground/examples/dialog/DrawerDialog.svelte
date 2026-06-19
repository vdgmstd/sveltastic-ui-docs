<script lang="ts">
	import { Dialog, Button } from 'sveltastic-ui';
	import type { DialogAlign } from 'sveltastic-ui';

	const edges: { align: DialogAlign; label: string }[] = [
		{ align: 'start', label: 'Start (inline)' },
		{ align: 'end', label: 'End (inline)' },
		{ align: 'bottom', label: 'Bottom sheet' }
	];
	let open = $state<Record<string, boolean>>({ start: false, end: false, bottom: false });
</script>

<div class="row">
	{#each edges as edge (edge.align)}
		<Dialog.Root bind:open={open[edge.align]} align={edge.align}>
			<Dialog.Trigger>
				{#snippet child({ props })}
					<Button.Root variant="flat" size="small" {...props}>{edge.label}</Button.Root>
				{/snippet}
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Close />
				<Dialog.Title>{edge.label} drawer</Dialog.Title>
				<Dialog.Body>
					<p>Edge-anchored Dialog: the same modal surface (focus-trap, scroll-lock, Esc) slides in from the chosen edge.</p>
					<p>Use <code>align="start"</code> / <code>"end"</code> for a side panel (RTL-aware) or <code>"bottom"</code> for a mobile bottom sheet.</p>
				</Dialog.Body>
				<Dialog.Footer>
					<Button.Root variant="flat" onclick={() => (open[edge.align] = false)}>Close</Button.Root>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
