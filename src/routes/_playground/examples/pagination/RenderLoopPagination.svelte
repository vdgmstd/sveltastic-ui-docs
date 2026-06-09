<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(7);
</script>

<!-- children render-loop escape hatch: receive { pages, range, currentPage } and render your own summary. -->
<Pagination.Root bind:page={value} length={42} color="success">
	{#snippet children({ range, currentPage })}
		<span class="summary">
			Page {currentPage} · showing {range.start}–{range.end}
		</span>
	{/snippet}
</Pagination.Root>

<style>
	.summary {
		font-size: 0.85rem;
		font-variant-numeric: tabular-nums;
		opacity: 0.85;
	}
</style>
