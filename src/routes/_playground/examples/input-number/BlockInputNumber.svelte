<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let value = $state(50);
</script>

<InputNumber.Root bind:value block min={0} max={100} step={5}>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
