<script lang="ts">
	import { Select } from 'sveltastic-ui';

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
			title: 'Veggies',
			items: [
				{ value: 'carrot', label: 'Carrot' },
				{ value: 'spinach', label: 'Spinach' }
			]
		}
	];
</script>

<Select bind:value items={groups} filter placeholder="Search…" />
