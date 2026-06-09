<script lang="ts">
	import { Calendar } from 'sveltastic-ui';

	let value = $state('2026-04-15');
	let lastChange = $state('—');
	let lastComplete = $state('—');
	let lastView = $state('—');
</script>

<Calendar.Root
	type="single"
	bind:value
	placeholder="2026-04-15"
	onValueChange={(v) => (lastChange = v || '(cleared)')}
	onValueChangeComplete={(v) => (lastComplete = v || '(cleared)')}
	onPlaceholderChange={(v) => (lastView = v)}
	showFooter
/>

<dl class="status">
	<dt>onValueChange</dt>
	<dd>{lastChange}</dd>
	<dt>onValueChangeComplete</dt>
	<dd>{lastComplete}</dd>
	<dt>onPlaceholderChange</dt>
	<dd>{lastView}</dd>
</dl>

<style>
	.status {
		display: grid;
		grid-template-columns: auto auto;
		gap: 2px 12px;
		margin: 0;
		font-size: 0.8rem;
	}
	.status dt {
		opacity: 0.6;
		font-family: monospace;
	}
	.status dd {
		margin: 0;
		font-variant-numeric: tabular-nums;
	}
</style>
