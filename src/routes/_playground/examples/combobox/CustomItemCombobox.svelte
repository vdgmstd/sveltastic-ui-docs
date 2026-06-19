<script lang="ts">
	import { Combobox } from 'sveltastic-ui';

	let value = $state<string | undefined>('cherry');

	// `items` feeds the engine (filter + keyboard nav); the hand-authored rows mirror it.
	const items = [
		{ value: 'apple', label: 'Apple', emoji: '🍎' },
		{ value: 'banana', label: 'Banana', emoji: '🍌' },
		{ value: 'cherry', label: 'Cherry', emoji: '🍒' },
		{ value: 'grape', label: 'Grape', emoji: '🍇' }
	];
</script>

<Combobox.Root type="single" bind:value {items} label="Favorite fruit" placeholder="Search…">
	<Combobox.Input />
	<Combobox.Content>
		{#each items as fruit (fruit.value)}
			<Combobox.Item value={fruit.value} label={fruit.label}>
				<span aria-hidden="true">{fruit.emoji}</span>
				<Combobox.ItemText />
				<Combobox.ItemIndicator />
			</Combobox.Item>
		{/each}
	</Combobox.Content>
</Combobox.Root>
