<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let snappy = $state(0);
	let smooth = $state(0);
	let slow = $state(0);
</script>

<label>
	<span>120 ms</span>
	<InputNumber.Root bind:value={snappy} step={10} animationDuration={120}>
		<InputNumber.Decrement />
		<InputNumber.Field />
		<InputNumber.Increment />
	</InputNumber.Root>
</label>
<label>
	<span>500 ms (default)</span>
	<InputNumber.Root bind:value={smooth} step={10}>
		<InputNumber.Decrement />
		<InputNumber.Field />
		<InputNumber.Increment />
	</InputNumber.Root>
</label>
<label>
	<span>1200 ms</span>
	<InputNumber.Root bind:value={slow} step={10} animationDuration={1200}>
		<InputNumber.Decrement />
		<InputNumber.Field />
		<InputNumber.Increment />
	</InputNumber.Root>
</label>

<style>
	label {
		display: inline-flex;
		flex-direction: column;
		gap: 6px;
		margin-right: 12px;
		font-size: 0.85rem;
		opacity: 0.8;
	}
</style>
