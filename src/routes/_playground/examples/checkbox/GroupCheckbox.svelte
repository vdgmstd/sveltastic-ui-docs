<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let fruits = $state<string[]>(['banana']);
</script>

<Checkbox.Group bind:value={fruits} color="primary">
	<Checkbox.GroupLabel>Fruits</Checkbox.GroupLabel>
	<Checkbox.Root value="apple">
		<Checkbox.Indicator />
		<Checkbox.Label>Apple</Checkbox.Label>
	</Checkbox.Root>
	<Checkbox.Root value="banana">
		<Checkbox.Indicator />
		<Checkbox.Label>Banana</Checkbox.Label>
	</Checkbox.Root>
	<Checkbox.Root value="cherry">
		<Checkbox.Indicator />
		<Checkbox.Label>Cherry</Checkbox.Label>
	</Checkbox.Root>
</Checkbox.Group>
<p class="selected">Selected: {fruits.join(', ') || '—'}</p>

<style>
	.selected {
		margin: 0.75rem 0 0;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
