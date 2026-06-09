<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let states = $state(3);
	let off = $state(3);
</script>

<div class="col">
	<Pagination.Root bind:page={states} length={10} disabledItems={[3, 7]} loadingItems={[5]} />
	<Pagination.Root bind:page={off} length={20} disabled />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}
</style>
