<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';
</script>

<InputNumber.Root value={1} decrementColor="danger" incrementColor="success">
	<InputNumber.Decrement />
	<InputNumber.Field />
	<InputNumber.Increment />
</InputNumber.Root>
<span class="muted">Per-button colors</span>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
