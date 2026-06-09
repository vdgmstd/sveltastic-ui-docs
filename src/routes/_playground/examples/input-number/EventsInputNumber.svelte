<script lang="ts">
	import { InputNumber } from 'sveltastic-ui';

	let value = $state(2);
	let last = $state<number | null>(null);
	let ref = $state<HTMLDivElement | null>(null);
</script>

<span id="qty-label" class="label">Quantity</span>
<InputNumber.Root
	bind:value
	bind:ref
	min={0}
	max={20}
	onValueChange={(v) => (last = v)}
>
	<InputNumber.Decrement />
	<InputNumber.Field labelId="qty-label" />
	<InputNumber.Increment />
</InputNumber.Root>
<button type="button" onclick={() => ref?.querySelector('input')?.focus()}>
	Focus via ref
</button>
<span class="status">last: {last ?? '—'}</span>

<style>
	.label {
		font-size: 0.85rem;
		opacity: 0.8;
	}
	.status {
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
