<script lang="ts">
	import { Checkbox } from 'sveltastic-ui';

	let checked = $state(false);
	let indeterminate = $state(true);
	let lastChecked = $state<boolean | null>(null);
	let lastIndeterminate = $state<boolean | null>(null);
	let node = $state<HTMLLabelElement | null>(null);

	// mirror the data-state the kit publishes on the .checkbox label
	let dataState = $derived(indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked');
</script>

<Checkbox.Root
	bind:checked
	bind:indeterminate
	bind:ref={node}
	color="success"
	onCheckedChange={(next) => (lastChecked = next)}
	onIndeterminateChange={(next) => (lastIndeterminate = next)}
>
	<Checkbox.Indicator />
	<Checkbox.Label>Toggle me</Checkbox.Label>
</Checkbox.Root>

<dl class="status">
	<dt>checked</dt>
	<dd>{checked}</dd>
	<dt>indeterminate</dt>
	<dd>{indeterminate}</dd>
	<dt>onCheckedChange</dt>
	<dd>{lastChecked ?? '—'}</dd>
	<dt>onIndeterminateChange</dt>
	<dd>{lastIndeterminate ?? '—'}</dd>
	<dt>data-state</dt>
	<dd>{dataState}</dd>
	<dt>ref tag</dt>
	<dd>{node?.tagName.toLowerCase() ?? '—'}</dd>
</dl>

<style>
	.status {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.25rem 1rem;
		margin: 0;
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
