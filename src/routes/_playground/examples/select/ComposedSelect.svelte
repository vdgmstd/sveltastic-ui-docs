<script lang="ts">
	import { Select } from 'sveltastic-ui';

	let value = $state<string | undefined>('apple');
	let last = $state<string | undefined>();

	// `items` feeds Root state (selected label, keyboard nav, typeahead);
	// the hand-authored Select.Item rows below mirror it for full markup control.
	const items = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'carrot', label: 'Carrot' },
		{ value: 'spinach', label: 'Spinach', disabled: true }
	];
</script>

<Select.Root
	type="single"
	bind:value
	{items}
	placeholder="Pick produce"
	onValueChange={(v) => (last = v)}
>
	<Select.Trigger />
	<Select.Content>
		<Select.Group>
			<Select.GroupHeading>Fruits</Select.GroupHeading>
			<Select.Item value="apple" label="Apple">Apple</Select.Item>
			<Select.Item value="banana" label="Banana">Banana</Select.Item>
			<Select.Item value="cherry" label="Cherry">Cherry</Select.Item>
		</Select.Group>
		<Select.Group>
			<Select.GroupHeading>Vegetables</Select.GroupHeading>
			<Select.Item value="carrot" label="Carrot">Carrot</Select.Item>
			<Select.Item value="spinach" label="Spinach" disabled>Spinach</Select.Item>
		</Select.Group>
	</Select.Content>
</Select.Root>
<p class="muted">onValueChange → {last ?? '—'}</p>

<style>
	.muted {
		font-size: 0.85rem;
		opacity: 0.7;
		margin: 0.5rem 0 0;
	}
</style>
