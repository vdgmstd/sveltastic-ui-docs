<script lang="ts">
	import { Select } from 'sveltastic-ui';

	let value = $state<string | undefined>('apple');

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'date', label: 'Date', disabled: true }
	];
</script>

<Select.Root type="single" bind:value {items} placeholder="Pick a fruit">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<p class="muted">Value: {value}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
