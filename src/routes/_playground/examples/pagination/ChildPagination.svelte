<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(2);
	const length = 8;
</script>

<!-- child render-delegation: receive the merged root props and render your own element. -->
<Pagination.Root bind:page={value} {length} color="#7d22f0">
	{#snippet child({ props })}
		<nav {...props} class="custom-pager">
			<button type="button" disabled={value <= 1} onclick={() => (value -= 1)}>‹ Prev</button>
			<span class="custom-pager__label">{value} / {length}</span>
			<button type="button" disabled={value >= length} onclick={() => (value += 1)}>Next ›</button>
		</nav>
	{/snippet}
</Pagination.Root>

<style>
	.custom-pager {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
	}
	.custom-pager button {
		border: 1px solid rgb(var(--text) / 0.15);
		border-radius: 8px;
		padding: 0.25rem 0.6rem;
		background: transparent;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}
	.custom-pager button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
	.custom-pager__label {
		font-variant-numeric: tabular-nums;
		font-weight: 600;
		color: rgb(var(--c));
	}
</style>
