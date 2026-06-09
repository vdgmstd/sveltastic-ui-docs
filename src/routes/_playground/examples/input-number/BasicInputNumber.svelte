<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let value = $state(3);
</script>

<InputNumber.Root bind:value>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
