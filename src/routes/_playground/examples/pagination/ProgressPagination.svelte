<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(1);
</script>

<Pagination.Root bind:page={value} length={50} progress />
