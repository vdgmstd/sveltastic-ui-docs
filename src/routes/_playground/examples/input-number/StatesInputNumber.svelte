<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let readonlyVal = $state(7);
</script>

<InputNumber.Root value={2} disabled>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">disabled</span>
<InputNumber.Root bind:value={readonlyVal} readonly>
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">readonly</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
