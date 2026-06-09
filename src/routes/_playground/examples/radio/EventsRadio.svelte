<script lang="ts">
	import { RadioGroup } from 'sveltastic-ui';

	let value = $state('apple');
	let lastChange = $state<string | null>(null);
	let groupRef = $state<HTMLDivElement | null>(null);
	let itemRef = $state<HTMLLabelElement | null>(null);
</script>

<RadioGroup.Root
	bind:value
	bind:ref={groupRef}
	name="fruit"
	orientation="horizontal"
	ariaLabel="Fruit"
	onValueChange={(next) => (lastChange = next)}
>
	<RadioGroup.Item value="apple" bind:ref={itemRef}>
		<RadioGroup.Indicator />
		<RadioGroup.Label>Apple</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="banana">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Banana</RadioGroup.Label>
	</RadioGroup.Item>
	<RadioGroup.Item value="cherry">
		<RadioGroup.Indicator />
		<RadioGroup.Label>Cherry</RadioGroup.Label>
	</RadioGroup.Item>
</RadioGroup.Root>

<dl class="status">
	<dt>value</dt>
	<dd>{value}</dd>
	<dt>onValueChange</dt>
	<dd>{lastChange ?? '—'}</dd>
	<dt>data-checked on</dt>
	<dd>{value}</dd>
	<dt>group ref</dt>
	<dd>{groupRef?.tagName.toLowerCase() ?? '—'}</dd>
	<dt>item ref</dt>
	<dd>{itemRef?.tagName.toLowerCase() ?? '—'}</dd>
</dl>

<style>
	.status {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.25rem 1rem;
		margin: 1rem 0 0;
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}
	.status dt {
		opacity: 0.6;
	}
	.status dd {
		margin: 0;
	}
</style>
