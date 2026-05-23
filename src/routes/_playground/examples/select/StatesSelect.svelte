<script lang="ts">
	import { Select } from 'sveltastic-ui';

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<Select placeholder="Disabled" disabled items={[]} />
<Select placeholder="Primary" fieldState="primary" {items} />
<Select placeholder="Success" fieldState="success" {items} />
<Select placeholder="Danger" fieldState="danger" {items} />
<Select placeholder="Warning" fieldState="warning" {items} />
<Select placeholder="Dark" fieldState="dark" {items} />
