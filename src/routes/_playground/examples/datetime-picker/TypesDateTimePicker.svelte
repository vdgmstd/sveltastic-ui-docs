<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('14:30');
	let date = $state('');
	let datetime = $state('');
</script>

<div class="row">
	<DateTimePicker.Root type="time" bind:value={time} label="Time" labelStyle="placeholder" />
	<DateTimePicker.Root type="date" bind:value={date} label="Date" labelStyle="placeholder" />
	<DateTimePicker.Root type="datetime" bind:value={datetime} label="Date + time" labelStyle="placeholder" />
</div>
<dl class="values">
	<dt>time</dt>
	<dd>{time || '—'}</dd>
	<dt>date</dt>
	<dd>{date || '—'}</dd>
	<dt>datetime</dt>
	<dd>{datetime || '—'}</dd>
</dl>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		align-items: center;
	}
	.values {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 4px 12px;
		margin: 12px 0 0;
		font-size: 0.8rem;
	}
	.values dt {
		color: rgb(var(--text) / 0.55);
		font-weight: 500;
	}
	.values dd {
		margin: 0;
		font-variant-numeric: tabular-nums;
	}
</style>
