<script lang="ts">
	import { Combobox } from 'sveltastic-ui';

	let value = $state<string | undefined>();

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'grape', label: 'Grape' },
		{ value: 'mango', label: 'Mango' },
		{ value: 'orange', label: 'Orange' }
	];
</script>

<Combobox.Root type="single" bind:value {items} label="Fruit" placeholder="Search a fruit…">
	<Combobox.Input />
	<Combobox.Content />
</Combobox.Root>
<span class="muted">→ {value ?? '—'}</span>

<style>
	.muted {
		margin-inline-start: 0.6rem;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
