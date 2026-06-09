<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let xl = $state(3);
	let large = $state(3);
	let medium = $state(3);
	let small = $state(3);
	let mini = $state(3);
</script>

<div class="col">
	<Pagination.Root bind:page={xl} length={8} size="xl" />
	<Pagination.Root bind:page={large} length={8} size="large" />
	<Pagination.Root bind:page={medium} length={8} size="medium" />
	<Pagination.Root bind:page={small} length={8} size="small" />
	<Pagination.Root bind:page={mini} length={8} size="mini" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}
</style>
