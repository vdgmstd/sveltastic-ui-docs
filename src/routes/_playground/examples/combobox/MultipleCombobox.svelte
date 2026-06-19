<script lang="ts">
	import { Combobox } from 'sveltastic-ui';

	let value = $state<string[]>(['svelte']);

	const items = [
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'react', label: 'React' },
		{ value: 'vue', label: 'Vue' },
		{ value: 'solid', label: 'Solid' },
		{ value: 'angular', label: 'Angular' },
		{ value: 'qwik', label: 'Qwik' }
	];
</script>

<Combobox.Root type="multiple" bind:value {items} label="Frameworks" placeholder="Filter…">
	<Combobox.Input />
	<Combobox.Content />
</Combobox.Root>
<p class="muted">{value.length ? value.join(', ') : '—'}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
