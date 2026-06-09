<script lang="ts">
	import { Switch } from 'sveltastic-ui';

	let checked = $state(false);
	let lastChange = $state<boolean | null>(null);
	let node = $state<HTMLInputElement | null>(null);

	// the kit publishes data-state on the .switch wrapper; mirror it here for the panel
	let dataState = $derived(checked ? 'checked' : 'unchecked');
</script>

<Switch.Root
	bind:checked
	bind:ref={node}
	color="success"
	ariaLabel="Event switch"
	onCheckedChange={(next) => (lastChange = next)}
>
	<Switch.Thumb />
</Switch.Root>

<dl class="status">
	<dt>checked</dt>
	<dd>{checked}</dd>
	<dt>onCheckedChange</dt>
	<dd>{lastChange ?? '—'}</dd>
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
