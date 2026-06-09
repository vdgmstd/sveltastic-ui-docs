<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(4);
</script>

<Pagination.Root bind:page={value} length={5} infinite color="success" />
