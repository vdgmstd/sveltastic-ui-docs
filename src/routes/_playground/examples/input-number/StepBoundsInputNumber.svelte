<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let bounded = $state(5);
	let stepFive = $state(10);
	let stepHundred = $state(0);
</script>

<InputNumber.Root bind:value={bounded} min={0} max={10}>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<InputNumber.Root bind:value={stepFive} step={5}>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<InputNumber.Root value={2} step={0.5} min={0} max={5}>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<InputNumber.Root bind:value={stepHundred} step={100} min={-1000} max={1000}>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">Hold +/− to repeat</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
