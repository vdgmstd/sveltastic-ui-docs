<script lang="ts">
	import { Select } from 'sveltastic-ui';

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];

	const groups = [
		{
			title: 'Fruits',
			items: [
				{ value: 'apple', label: 'Apple' },
				{ value: 'banana', label: 'Banana' }
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

<Select {items} openAnim="pop" placeholder="pop" />
<Select {items} openAnim="slide" placeholder="slide" />
<Select {items} openAnim="fade" placeholder="fade" />
<Select {items} openAnim="spring" placeholder="spring" />
<Select items={groups} openAnim="stagger" placeholder="stagger" />
