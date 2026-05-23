<script lang="ts">
	import { Pagination } from 'sveltastic-ui';

	let value = $state(4);
</script>

<Pagination bind:value length={5} infinite color="success" />
