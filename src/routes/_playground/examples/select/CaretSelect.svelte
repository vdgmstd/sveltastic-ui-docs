<script lang="ts">
	import { Select } from 'sveltastic-ui';
	import { MagnifyingGlassIcon, PlusIcon } from 'phosphor-svelte';

	let value = $state<string | undefined>('apple');

	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' }
	];
</script>

<Select bind:value {items} placeholder="Search">
	{#snippet caret()}
		<MagnifyingGlassIcon size={14} weight="bold" />
	{/snippet}
</Select>
<Select bind:value {items} placeholder="Toggle">
	{#snippet caret(isOpen)}
		<span class="caret-toggle" class:caret-toggle--open={isOpen}>
			<PlusIcon size={14} weight="bold" />
		</span>
	{/snippet}
</Select>

<style>
	.caret-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.caret-toggle--open {
		transform: rotate(45deg);
	}
</style>
