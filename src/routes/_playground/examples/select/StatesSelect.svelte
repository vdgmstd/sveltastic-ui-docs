<script lang="ts">
	import { Select } from 'sveltastic-ui';

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<Select.Root type="single" placeholder="Disabled" disabled items={[]}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Primary" fieldState="primary" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Success" fieldState="success" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Danger" fieldState="danger" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Warning" fieldState="warning" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Dark" fieldState="dark" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
