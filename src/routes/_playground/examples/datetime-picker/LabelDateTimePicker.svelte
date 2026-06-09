<script lang="ts">
	import { DateTimePicker } from 'sveltastic-ui';

	let time = $state('08:00');
	let date = $state('');
	let datetime = $state('');
</script>

<div class="row">
	<DateTimePicker.Root type="time" bind:value={time} label="Reminder time" labelStyle="placeholder" />
	<DateTimePicker.Root type="date" bind:value={date} label="Birthday" labelStyle="inline" />
	<DateTimePicker.Root type="datetime" bind:value={datetime} label="Meeting" />
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		align-items: flex-start;
	}
</style>
