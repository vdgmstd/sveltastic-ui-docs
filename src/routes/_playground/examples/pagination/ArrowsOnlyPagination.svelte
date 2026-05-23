<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(3);
</script>

<Pagination bind:value length={20} arrowsOnly />
<p class="muted">Page {value} / 20</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
