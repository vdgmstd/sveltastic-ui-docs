<script lang="ts">
	import { Combobox } from 'sveltastic-ui';

	const all = [
		{ value: 'us', label: 'United States' },
		{ value: 'gb', label: 'United Kingdom' },
		{ value: 'de', label: 'Germany' },
		{ value: 'fr', label: 'France' },
		{ value: 'jp', label: 'Japan' },
		{ value: 'br', label: 'Brazil' }
	];

	let value = $state<string | undefined>();
	let query = $state('');

	// filter={false} → you own the narrowing; here a starts-with match.
	let items = $derived(
		query ? all.filter((c) => c.label.toLowerCase().startsWith(query.toLowerCase())) : all
	);
</script>

<Combobox.Root
	type="single"
	bind:value
	bind:inputValue={query}
	{items}
	filter={false}
	label="Country"
	placeholder="Type a country…"
>
	<Combobox.Input />
	<Combobox.Content />
</Combobox.Root>
