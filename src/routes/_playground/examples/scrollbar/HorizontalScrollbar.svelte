<script lang="ts">
	const cells = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<!-- Same tokens, both axes — `scrollbar-color` retints horizontal too. -->
<div class="demo">
	{#each cells as n (n)}
		<div class="cell">{n}</div>
	{/each}
</div>

<style>
	.demo {
		max-width: 480px;
		overflow-x: auto;
		overflow-y: hidden;
		display: flex;
		gap: 0.5rem;
		padding: 0.75rem;
		border: 1px solid rgb(var(--gray-3));
		border-radius: 12px;
		background: rgb(var(--gray-1));
		/* Make the thumb visible at rest so the horizontal scrollbar is
		   discoverable; the auto-hide swap to --scrollbar-thumb-hover still
		   fires on actual scroll. */
		--scrollbar-thumb: rgb(var(--text) / 0.18);
	}
	.cell {
		flex: 0 0 auto;
		width: 84px;
		height: 84px;
		display: grid;
		place-items: center;
		border-radius: 10px;
		background: rgb(var(--gray-2));
		font-variant-numeric: tabular-nums;
		font-weight: 600;
	}
</style>
