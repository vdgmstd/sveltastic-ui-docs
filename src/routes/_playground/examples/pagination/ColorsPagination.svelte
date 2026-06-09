<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let primary = $state(3);
	let success = $state(3);
	let danger = $state(3);
	let warning = $state(3);
	let dark = $state(3);
	let hex = $state(3);
</script>

<div class="col">
	<Pagination.Root bind:page={primary} length={8} color="primary" />
	<Pagination.Root bind:page={success} length={8} color="success" />
	<Pagination.Root bind:page={danger} length={8} color="danger" />
	<Pagination.Root bind:page={warning} length={8} color="warning" />
	<Pagination.Root bind:page={dark} length={8} color="dark" />
	<Pagination.Root bind:page={hex} length={8} color="#7d22f0" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}
</style>
