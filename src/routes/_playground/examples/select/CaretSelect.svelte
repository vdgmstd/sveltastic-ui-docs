<script lang="ts">
	import { Select } from 'sveltastic-ui';
	import { MagnifyingGlassIcon } from 'phosphor-svelte';

	let value = $state<string | undefined>('apple');

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<Select.Root type="single" bind:value {items} placeholder="Custom icon">
	<Select.Trigger>
		<Select.Icon>
			<MagnifyingGlassIcon size={14} weight="bold" />
		</Select.Icon>
	</Select.Trigger>
	<Select.Content />
</Select.Root>
<Select.Root type="single" bind:value {items} placeholder="Default caret">
	<Select.Trigger />
	<Select.Content />
</Select.Root>
