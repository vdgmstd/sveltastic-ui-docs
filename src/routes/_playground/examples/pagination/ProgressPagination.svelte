<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(1);
</script>

<Pagination bind:value length={50} progress />
