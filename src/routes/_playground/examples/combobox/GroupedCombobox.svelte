<script lang="ts">
	import { Combobox } from 'sveltastic-ui';

	let value = $state<string | undefined>();

	const groups = [
		{
			title: 'Fruits',
			items: [
				{ value: 'apple', label: 'Apple' },
				{ value: 'banana', label: 'Banana' },
				{ value: 'cherry', label: 'Cherry' }
			]
		},
		{
			title: 'Vegetables',
			items: [
				{ value: 'carrot', label: 'Carrot' },
				{ value: 'spinach', label: 'Spinach' },
				{ value: 'potato', label: 'Potato' }
			]
		}
	];
</script>

<Combobox.Root type="single" bind:value items={groups} label="Produce" placeholder="Type to filter…">
	<Combobox.Input />
	<Combobox.Content />
</Combobox.Root>
