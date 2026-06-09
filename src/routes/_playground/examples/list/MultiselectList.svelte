<script lang="ts">
	import { List } from 'sveltastic-ui';

	let selected = $state<string[]>(['blue']);
	const options = [
		{ value: 'red', label: 'Red', color: 'danger' },
		{ value: 'blue', label: 'Blue', color: 'primary' },
		{ value: 'green', label: 'Green', color: 'success' },
		{ value: 'yellow', label: 'Yellow', color: 'warning' }
	] as const;
</script>

<List.Root type="multiple" bind:selected>
	<List.Body ariaLabel="Pick colors">
		{#each options as option (option.value)}
			<List.Item value={option.value} color={option.color}>
				<List.ItemContent><List.ItemLabel>{option.label}</List.ItemLabel></List.ItemContent>
			</List.Item>
		{/each}
	</List.Body>
</List.Root>
<p class="hint">Selected: <code>{selected.join(', ') || '—'}</code></p>

<style>
	.hint {
		margin: 0.5rem 0 0;
		font-size: 0.78rem;
		opacity: 0.65;
	}
	.hint code {
		background: rgb(var(--gray-3));
		padding: 1px 6px;
		border-radius: 6px;
		font-size: 0.78rem;
	}
</style>
