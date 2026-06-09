<script lang="ts">
	import { Select } from 'sveltastic-ui';

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<Select.Root type="single" placeholder="Default" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Border" variant="border" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
<Select.Root type="single" placeholder="Shadow" variant="shadow" {items}>
	<Select.Trigger />
	<Select.Content />
</Select.Root>
