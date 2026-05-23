<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let value = $state(50);
</script>

<InputNumber bind:value block min={0} max={100} step={5} />
