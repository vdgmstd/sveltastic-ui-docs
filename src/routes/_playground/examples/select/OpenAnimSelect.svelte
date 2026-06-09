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

<Select.Root type="single" {items} openAnim="pop" placeholder="pop">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" {items} openAnim="slide" placeholder="slide">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" {items} openAnim="fade" placeholder="fade">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" {items} openAnim="spring" placeholder="spring">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" items={groups} openAnim="stagger" placeholder="stagger">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
