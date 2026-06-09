<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';
</script>

<InputNumber.Root value={1} shape="default">
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">default</span>
<InputNumber.Root value={1} shape="square" color="danger">
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">square</span>
<InputNumber.Root value={1} shape="circle" color="success">
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">circle</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
