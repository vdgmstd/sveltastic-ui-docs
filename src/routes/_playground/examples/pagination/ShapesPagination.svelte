<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let dflt = $state(3);
	let circle = $state(3);
	let square = $state(3);
</script>

<div class="col">
	<Pagination bind:value={dflt} length={8} shape="default" />
	<Pagination bind:value={circle} length={8} shape="circle" />
	<Pagination bind:value={square} length={8} shape="square" />
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}
</style>
