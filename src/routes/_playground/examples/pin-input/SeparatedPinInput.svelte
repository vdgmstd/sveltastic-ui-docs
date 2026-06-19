<script lang="ts">
	import { PinInput } from 'sveltastic-ui';

	let value = $state('');
</script>

<PinInput.Root bind:value maxLength={6} aria-label="Verification code">
	{#snippet children({ cells })}
		{#each cells.slice(0, 3) as cell, i (i)}
			<PinInput.Cell {cell} />
		{/each}
		<span class="sep" aria-hidden="true">–</span>
		{#each cells.slice(3) as cell, i (i)}
			<PinInput.Cell {cell} />
		{/each}
	{/snippet}
</PinInput.Root>
<span class="muted">→ {value || '—'}</span>

<style>
	.sep {
		display: inline-flex;
		align-items: center;
		font-size: 1.25rem;
		opacity: 0.4;
	}
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
