<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	// ISO YYYY-MM-DD offset from today, so the bounds always surround the current day.
	const DAY_MS = 86_400_000;
	function isoOffset(days: number): string {
		return new Date(Date.now() + days * DAY_MS).toISOString().slice(0, 10);
	}

	const min = isoOffset(-3);
	const max = isoOffset(3);

	let date = $state('');
	let datetime = $state('');
</script>

<DateTimePicker.Root
	type="date"
	bind:value={date}
	{min}
	{max}
	label="Within ±3 days"
	labelStyle="placeholder"
/>
<DateTimePicker.Root
	type="datetime"
	bind:value={datetime}
	{min}
	{max}
	label="Datetime within range"
	labelStyle="placeholder"
/>
