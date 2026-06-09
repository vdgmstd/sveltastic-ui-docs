<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let p1 = $state(3);
	let p2 = $state(3);
	let p3 = $state(3);
	let p4 = $state(3);
</script>

<div class="col">
	<Pagination.Root bind:page={p1} length={10} variant="default" />
	<Pagination.Root bind:page={p2} length={10} variant="flat" />
	<Pagination.Root bind:page={p3} length={10} variant="border" />
	<Pagination.Root bind:page={p4} length={10} variant="transparent" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}
</style>
