<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let value = $state('2026-04-28T14:30');
	let open = $state(false);
	let lastChange = $state('—');
	let lastOpen = $state('—');
</script>

<DateTimePicker.Root
	type="datetime"
	bind:value
	bind:open
	label="Meeting"
	labelStyle="placeholder"
	onValueChange={(v) => (lastChange = v || '—')}
	onOpenChange={(o) => (lastOpen = String(o))}
/>

<dl class="status">
	<dt>value</dt>
	<dd>{value || '—'}</dd>
	<dt>open (bound)</dt>
	<dd>{open}</dd>
	<dt>onValueChange</dt>
	<dd>{lastChange}</dd>
	<dt>onOpenChange</dt>
	<dd>{lastOpen}</dd>
</dl>

<style>
	.status {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 4px 12px;
		margin: 12px 0 0;
		font-size: 0.8rem;
	}
	.status dt {
		color: rgb(var(--text) / 0.55);
		font-weight: 500;
	}
	.status dd {
		margin: 0;
		font-variant-numeric: tabular-nums;
	}
</style>
