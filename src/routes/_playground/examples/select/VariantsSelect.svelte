<script lang="ts">
	import { Select } from 'sveltastic-ui';

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<Select placeholder="Default" {items} />
<Select placeholder="Border" variant="border" {items} />
<Select placeholder="Shadow" variant="shadow" {items} />
