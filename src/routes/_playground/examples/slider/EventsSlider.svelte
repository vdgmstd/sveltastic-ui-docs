<script lang="ts">
	import { Slider } from 'sveltastic-ui';

	let value = $state(45);
	let lastChange = $state<number | number[] | null>(null);
	let lastCommit = $state<number | number[] | null>(null);
	let node = $state<HTMLDivElement | null>(null);
</script>

<Slider.Root
	bind:value
	bind:ref={node}
	type="single"
	ariaLabel="Brightness"
	color="primary"
	showTooltip
	onValueChange={(next) => (lastChange = next)}
	onValueCommit={(next) => (lastCommit = next)}
/>

<dl class="status">
	<dt>value</dt>
	<dd>{value}</dd>
	<dt>onValueChange</dt>
	<dd>{lastChange ?? '—'}</dd>
	<dt>onValueCommit</dt>
	<dd>{lastCommit ?? '—'}</dd>
	<dt>ref tag</dt>
	<dd>{node?.tagName.toLowerCase() ?? '—'}</dd>
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
