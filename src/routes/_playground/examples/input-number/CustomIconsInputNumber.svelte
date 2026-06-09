<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';
	import { CaretDownIcon, CaretUpIcon } from 'phosphor-svelte';

	let value = $state(3);
</script>

<InputNumber.Root bind:value color="primary">
	<InputNumber.Decrement decrementLabel="Fewer">
		<CaretDownIcon size={14} weight="bold" />
	</InputNumber.Decrement>
	<InputNumber.Field />
	<InputNumber.Increment incrementLabel="More">
		<CaretUpIcon size={14} weight="bold" />
	</InputNumber.Increment>
</InputNumber.Root>
