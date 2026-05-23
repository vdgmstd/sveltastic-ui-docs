<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(3);
</script>

<Pagination bind:value length={10} mode="dots" />
