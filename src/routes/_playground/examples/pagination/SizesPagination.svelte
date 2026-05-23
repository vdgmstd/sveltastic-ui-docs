<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let xl = $state(3);
	let large = $state(3);
	let medium = $state(3);
	let small = $state(3);
	let mini = $state(3);
</script>

<div class="col">
	<Pagination bind:value={xl} length={8} size="xl" />
	<Pagination bind:value={large} length={8} size="large" />
	<Pagination bind:value={medium} length={8} size="medium" />
	<Pagination bind:value={small} length={8} size="small" />
	<Pagination bind:value={mini} length={8} size="mini" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}
</style>
