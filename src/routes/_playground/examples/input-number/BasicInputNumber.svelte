<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let value = $state(3);
</script>

<InputNumber bind:value />
